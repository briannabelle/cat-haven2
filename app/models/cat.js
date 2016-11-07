import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    age: DS.attr('number'),
    gender: DS.attr('string'),
    isVaccinated: DS.attr('boolean'),
    isWormed: DS.attr('boolean'),
    isDesexed: DS.attr('boolean'),
    hasFIV: DS.attr('boolean'),
    breed: DS.attr('string'),
    photo: DS.attr('string'),
    adoptionFee: DS.attr('number')
});
