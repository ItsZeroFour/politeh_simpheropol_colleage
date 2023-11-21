import mongoose from "mongoose";

const PageModel = new mongoose.Schema({
  pageUrl: {
    type: String,
    required: true,
    unique: true,
  },

  title1: String,
  text1: String,
  image1: String,
  list1: Array,
  block1: Object,
  links1: Array,

  title2: String,
  text2: String,
  image2: String,
  list2: Array,
  block2: Object,
  links2: Array,

  title3: String,
  text3: String,
  image3: String,
  list3: Array,
  block3: Object,
  links3: Array,

  title4: String,
  text4: String,
  image4: String,
  list4: Array,
  block4: Object,
  links4: Array,
});

export default mongoose.model("Page", PageModel);
