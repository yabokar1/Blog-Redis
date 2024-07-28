import mongoose from "mongoose";
import redis from "redis";
import keys from "../config/keys";

const client = redis.createClient({ url: keys.redisUrl });
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || "");

  return this;
};

mongoose.Query.prototype.exec = async function (...args: any[]) {
  if (!this.useCache) {
    // @ts-ignore
    return exec.apply(this, args);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseOptions.name,
    })
  );

  const cacheValue = await client.hGet(this.hashKey!, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : new this.model(doc);
  }
  // @ts-ignore
  const result = await exec.apply(this, args);
  await client.hSet(this.hashKey!, key, JSON.stringify(result));
  await client.expire(this.hashKey!, 10);

  return result;
};

const clearHash = function (hashKey: any) {
  client.del(JSON.stringify(hashKey));
};

export default clearHash;
