import { Schema, model } from 'mongoose';

const Challenges = new Schema({
  challengesCompleted: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  currentExperience: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  }
});

const ChallengesSchema = model('Challenge', Challenges);

export {
  ChallengesSchema
};