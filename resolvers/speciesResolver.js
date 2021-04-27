import Species from '../models/speciesModel.js';

export default {
    Animal: {
        species: (parent) => Species.findById(parent.species)
    }
}