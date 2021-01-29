module.exports = function (app) {
    const modelName = 'category';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const schema = new Schema({

        categoryName: {
            type: String,
            unique: true,
            required: true
        },
        groupId: {
            type: String,
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }

    });

    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);

};
