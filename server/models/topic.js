const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  authorId: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;