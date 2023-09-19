module.exports = (mongoose, slugify, uniqueValidator) => {
  const schema = mongoose.Schema(
    {
      slug: {
        type: String,
        lowercase: true,
        unique: true
      },
      title: String,
      description: String,
      // status: String,
      price: Number,
      imgs: Array,
      // shipment: Boolean,
      // infProd: Array,
      // attributes: Array,
      // views: Number
    },
    { timestamps: true }
  );

  schema.plugin(uniqueValidator);

  schema.pre('save', function (next) {
    this.slug = slugify(this.title + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36), { lower: true, replacement: '-'});
    next();
  });

  schema.method("toJSON", function () {
    const { __v, ...object } = this.toObject();
    return object;
  });

  const Product = mongoose.model("product", schema);

  return Product;
};
