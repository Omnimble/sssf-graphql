import Category from '../models/categoryModel.js';

export default {
    Species: {
        category: (parent) => Category.findById(parent.category)
    }
}