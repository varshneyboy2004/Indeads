import mongoose from "mongoose";

export function connect() {
    if (mongoose.connection.readyState == 1) {
        return mongoose.connection.asPromise();
    } else {
        const uri = process.env.MONGO_URI;
        return mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}
