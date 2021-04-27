import Animal from '../models/animalModel.js';

export default {
    Query: {
        animals: () => Animal.find({})
    },
    Mutation: {
        modifyAnimal: async(_, args, context) => {
            try {
                const { id, animalName, species } = args;
                const updatedItem = await Item.findByIdAndUpdate(id, { animalName, species }, { new: true });
                return updatedItem.save();
            } catch (error) {
                throw new UserInputError(`Error while updating the item: ${error.message}`);
            }
        }
    }
};