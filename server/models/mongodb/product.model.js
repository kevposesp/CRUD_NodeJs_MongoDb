module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          title: String,
          description: String,
          status: String,
          price: Number,
          imgs: Array,
          shipment: Boolean,
          infProd: Array,
          attributes: Array,
          views: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });

    const Product = mongoose.model("product", schema);

    return Product;
  };