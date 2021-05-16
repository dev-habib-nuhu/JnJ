import mongoose from 'mongoose'
const connectDB = async () =>{
    try {
        const conn  = await mongoose.connect(process.env.CONNECTION_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`Connected To DB => : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting to db: ${error.message}`)
        process.exit(1)
    }
}

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify',false)

export default connectDB