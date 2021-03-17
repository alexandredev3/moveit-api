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
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    }
  }
});

const ChallengesSchema = model('Challenge', Challenges);

export {
  ChallengesSchema
};