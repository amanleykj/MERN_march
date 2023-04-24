const mongoose = require('mongoose')

const db = 'chatapp-db'
mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .then(() => console.log(`Connected just fine to ${db}`))
    .catch((error) => console.log(`Not connected. ${db} not connected. Check these errors: ` + error))