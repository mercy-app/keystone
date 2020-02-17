require('dotenv').config();
const {
  File,
  Text,
  CloudinaryImage,
  Slug,
  Relationship,
  Select,
  Password,
  Checkbox,
  CalendarDay,
  DateTime,
  OEmbed,
  Float,
  Integer,
} = require('@keystonejs/fields');
const {
  createdAt,
  createdBy,
  updatedAt,
  updatedBy,
  atTracking,
  byTracking,
} = require('@keystonejs/list-plugins');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const getYear = require('date-fns/get_year');
const AgencyTemplate = require('./shop/common/src/data/Agency/template-mercy');
const AppTemplate = require('./shop/common/src/data/App/template-mercy');

const getSectionType = item => {
  if (!item.sectionTemplate || !item.sectionType) {
    return null;
  }
  const template = getSectionTemplate(item);
  if (!template) {
    return null;
  }
  return template[item.sectionType] ? template[item.sectionType] : null;
};

const getSectionTemplate = item => {
  if (!item.sectionTemplate) {
    return null;
  }
  let template;
  switch (item.sectionTemplate) {
    case 'App':
      template = AppTemplate;
      break;
    case 'Agency':
      template = AgencyTemplate;
      break;
    default:
      return null;
      break;
  }

  return template;
};

// const { staticRoute, staticPath, distDir } = require('./config');
const dev = process.env.NODE_ENV !== 'production';

let iframelyAdapter;

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
});

if (process.env.IFRAMELY_API_KEY) {
  const { IframelyOEmbedAdapter } = require('@keystonejs/oembed-adapters');
  iframelyAdapter = new IframelyOEmbedAdapter({
    apiKey: process.env.IFRAMELY_API_KEY,
  });
}

// Access control functions

const access = {
  userIsAdmin: ({ authentication: { item: user } }) => Boolean(user && user.isAdmin),
  userOwnsItem: ({ authentication: { item: user } }) => {
    if (!user) {
      return false;
    }
    return { id: user.id };
  },
  userIsAdminOrOwner: auth => {
    const isAdmin = access.userIsAdmin(auth);
    const isOwner = access.userOwnsItem(auth);
    return isAdmin ? isAdmin : isOwner;
  },
  userIsCurrentAuth: ({ authentication: { item } }) => {
    if (!item) {
      return false;
    }
    return { id: item.id };
  },
};

exports.Address = {
  fields: {
    name: { type: Text },
    type: { type: Text },
    info: { type: Text },
    user: {
      type: Relationship,
      ref: 'User.address',
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    delete: access.userIsAdminOrOwner,
    auth: true,
  },
  plugins: [atTracking(), createdAt(), updatedAt()],
  labelResolver: item => item.name,
};

exports.Card = {
  fields: {
    name: { type: Text },
    type: { type: Text },
    cardType: { type: Text },
    lastFourDigit: { type: Integer },
    user: {
      type: Relationship,
      ref: 'User.card',
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    delete: access.userIsAdminOrOwner,
    auth: true,
  },
  plugins: [atTracking(), createdAt(), updatedAt()],
  labelResolver: item => item.name,
};

exports.Contact = {
  fields: {
    type: { type: Text },
    number: { type: Text },
    user: {
      type: Relationship,
      ref: 'User.contact',
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    delete: access.userIsAdminOrOwner,
    auth: true,
  },
  plugins: [atTracking(), createdAt(), updatedAt()],
  labelResolver: item => item.name,
};

// Models
exports.User = {
  fields: {
    name: { type: Text },
    email: { type: Text, isUnique: true },
    address: {
      type: Relationship,
      ref: 'Address.user',
      many: true,
    },
    contact: {
      type: Relationship,
      ref: 'Contact.user',
      many: true,
    },
    card: {
      type: Relationship,
      ref: 'Card.user',
      many: true,
    },
    dob: {
      type: CalendarDay,
      format: 'Do MMMM YYYY',
      yearRangeFrom: 1901,
      yearRangeTo: getYear(new Date()),
    },
    sites: {
      type: Relationship,
      ref: 'Site.user',
      many: true,
    },
    password: { type: Password },
    isAdmin: { type: Checkbox },
    avatar: { type: CloudinaryImage, adapter: cloudinaryAdapter },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsCurrentAuth,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
  plugins: [atTracking(), createdAt(), updatedAt()],
  labelResolver: item => `${item.name} <${item.email}>`,
};

exports.Variant = {
  fields: {
    price: { type: Float },
    available: { type: Boolean },
    product: {
      type: Relationship,
      ref: 'Product.variants',
    },
    optionValues: {
      type: Relationship,
      ref: 'OptionValue.variant',
      many: true,
    },
  },
};

exports.Attribute = {
  fields: {
    key: { type: Text },
    value: { type: Text },
    product: {
      type: Relationship,
      ref: 'Product.attributes',
    },
  },
  labelResolver: item => item.title,
};

exports.OptionValue = {
  fields: {
    name: { type: Text },
    option: {
      type: Relationship,
      ref: 'Option.values',
    },
    variant: {
      type: Relationship,
      ref: 'Variant.optionValues',
    },
  },
  labelResolver: item => item.name,
};

exports.Option = {
  fields: {
    name: { type: Text },
    values: {
      type: Relationship,
      ref: 'OptionValue.option',
      many: true,
    },
  },
  labelResolver: item => item.name,
};

exports.Collection = {
  fields: {
    title: { type: Text },
    description: { type: Text },
    slug: { type: Slug, from: 'title' },
    products: { type: Relationship, ref: 'Product.collections', many: true },
  },
  labelResolver: item => item.title,
};

exports.Product = {
  fields: {
    title: { type: Text },
    slug: { type: Slug, from: 'title' },
    type: { type: Text },
    unit: { type: Text },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    categories: {
      type: Relationship,
      ref: 'Category.products',
      many: true,
    },
    coupons: { type: Relationship, ref: 'Coupon.products', many: true },
    collections: { type: Relationship, ref: 'Collection.products', many: true },
    attributes: { type: Relationship, ref: 'Attribute.product', many: true },
    variants: { type: Relationship, ref: 'Variant.product', many: true },
    description: { type: Wysiwyg },
    posted: { type: DateTime, format: 'DD/MM/YYYY' },
    gallery: { type: CloudinaryImage, adapter: cloudinaryAdapter, many: true },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
  },
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'title, status',
    defaultSort: 'title',
  },
  labelResolver: item => item.title,
};

exports.Coupon = {
  fields: {
    title: { type: Text },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    code: { type: Text },
    discountInPercent: { type: Number },
    number_of_coupon: { type: Number },
    number_of_used_coupon: { type: Number },
    products: { type: Relationship, ref: 'Product.coupons', many: true },
    status: { type: Text },
    expiration_date: { type: DateTime },
  },
  labelResolver: item => item.title,
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
};

exports.Category = {
  fields: {
    title: { type: Text },
    slug: { type: Slug, from: 'title' },
    products: {
      type: Relationship,
      ref: 'Product.categories',
      many: true,
    },
    children: {
      type: Relationship,
      ref: 'Category',
      many: true,
    },
    type: { type: Text },
    icon: { type: Text },
  },
  labelResolver: item => item.title,
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
};

// exports.Comment = {
//   fields: {
//     body: { type: Text, isMultiline: true },
//     originalProduct: {
//       type: Relationship,
//       ref: 'Product',
//     },
//   },
//   plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
//   labelResolver: item => item.body,
// };

exports.Site = {
  fields: {
    title: { type: Text },
    description: { type: Text },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    pages: {
      type: Relationship,
      ref: 'Page.site',
      many: true,
    },
    user: {
      type: Relationship,
      ref: 'User.sites',
    },
  },
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  labelResolver: item => item.title,
};

exports.Page = {
  fields: {
    title: { type: Text },
    description: { type: Text },
    site: {
      type: Relationship,
      ref: 'Site.pages',
    },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
    sections: {
      type: Relationship,
      ref: 'Section.page',
      many: true,
    },
  },
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  labelResolver: item => item.title,
};

exports.Section = {
  fields: {
    page: {
      type: Relationship,
      ref: 'Page.sections',
    },
    type: { type: Text },
    lists: {
      type: Relationship,
      ref: 'List.section',
      many: true,
    },
    template: { type: Text },
    type: { type: Text },
    oid: { type: Integer },
    name: { type: Text },
    logo: { type: Text },
    slogan: { type: Text },
    title: { type: Text },
    description: { type: Text },
    image: { type: Text },
  },
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  labelResolver: item => item.title,
};

exports.List = {
  fields: {
    name: {
      type: Text,
    },
    section: {
      type: Relationship,
      ref: 'Section.lists',
    },
    parentBlock: {
      type: Relationship,
      ref: 'Block.childrenList',
    },
    blocks: {
      type: Relationship,
      ref: 'Block.list',
      many: true,
    },
  },
};

exports.Block = {
  fields: {
    oid: { type: Integer },
    title: {
      type: Text,
      // access: {
      //   read: ({ existingItem }) => {
      //     const sectionType = getSectionType(existingItem);
      //     if (existingItem.sectionTemplate && existingItem.sectionType) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   },
      // },
    },
    label: { type: Text },
    path: { type: Text },
    offset: { type: Text },
    image: { type: Text },
    color: { type: Text },
    icon: { type: Text },
    description: { type: Text },
    thumb_url: { type: Text },
    link: { type: Text },
    suggested: { type: Checkbox },
    price: { type: Integer },
    features: { type: Text },
    trail: { type: Integer },
    trailLink: { type: Text },
    img: { type: Text },
    text: { type: Text },
    avatar: { type: Text },
    name: { type: Text },
    designation: { type: Text },
    review: { type: Integer },
    childrenList: {
      type: Relationship,
      ref: 'List.parentBlock',
      many: true,
    },
    description: { type: Text },
    list: {
      type: Relationship,
      ref: 'List.blocks',
    },
    sectionTemplate: { type: Text },
    sectionType: { type: Text },
  },

  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  labelResolver: item => item.title,
};

exports.Schedule = {
  fields: {
    title: { type: Text },
    description: { type: Text },
  },
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  labelResolver: item => item.title,
};

exports.Setting = {
  fields: {
    type: { type: Text },
  },
  plugins: [atTracking(), createdAt(), updatedAt(), byTracking(), createdBy(), updatedBy()],
  // labelResolver: item => item.title
};

exports.Customer = {
  fields: {
    firstName: { type: Text },
    lastName: { type: Text },
    orders: {
      type: Relationship,
      ref: 'Order.customer',
      many: true,
    },
  },
};

exports.Order = {
  fields: {
    amount: { type: Float },
    deliveryTime: { type: DateTime },
    deliveryAddress: { type: Text },
    subtotal: { type: Float },
    discount: { type: Float },
    deliveryFee: { type: Float },
    status: { type: Number },
    customer: {
      type: Relationship,
      ref: 'Customer.orders',
    },
    variants: {
      type: Relationship,
      ref: 'Variant',
      many: true,
    },
  },
  access: {
    create: access.userIsAdmin,
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    delete: access.userIsAdminOrOwner,
    auth: true,
  },
  plugins: [atTracking(), createdAt(), updatedAt()],
  // labelResolver: item => item.title
};
