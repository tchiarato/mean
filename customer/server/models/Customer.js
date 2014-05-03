
module.exports = function (mongoose) {

    var Customer = mongoose.model('Customer', {
        contactName: String,
        phone      : String
    });

    return Customer;
}
