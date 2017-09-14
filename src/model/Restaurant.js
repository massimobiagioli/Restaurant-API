import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: String
});

export default mongoose.model('Restaurant', restaurantSchema);
