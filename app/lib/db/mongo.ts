import mongoose from 'mongoose';
// ✅ Fix — cache the connection promise
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGODB_URI is not defined in environment variables");
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = `${process.env.MONGO_URI}`;
    cached.promise = mongoose.connect(uri).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};