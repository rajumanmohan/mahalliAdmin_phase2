interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}
export interface NavData1 {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}
export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}
if (sessionStorage.role == 'Admin') {
  var newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },

    {
      name: 'Main Categories',
      url: '/Category',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Categories',
          url: '/Category/categories',
          icon: 'icon-puzzle'
        },
        {
          name: 'Sub Categories',
          url: '/Category/subcategories',
          icon: 'icon-puzzle'
        },
        {
          name: 'Sub Sub Categories',
          url: '/Category/subsubcategories',
          icon: 'icon-puzzle'
        },
      ]
    },

    {
      name: 'Products',
      url: '/widgets',
      icon: 'icon-calculator',
    },
    {
      name: 'Requested Products',
      url: '/suggestedproducts',
      icon: 'fa fa-cart-plus ',
    },

    {
      name: 'Attribute Master',
      url: '/attrimaster',
      icon: 'icon-user'
    },
    // {
    //   name: 'Wholeseller ',
    //   url: '/wholeseller',
    //   icon: 'icon-user'
    // },
    {
      name: 'Wholeseller',
      url: '/wholeseller',
      icon: 'icon-user',
      children: [
        {
      name: 'Wholeseller ',
      url: '/wholeseller',
      icon: 'icon-user'
    },
        {
                name: 'Wholeseller Commision',
                url: '/commission/wholeseller',
                icon: 'fa fa-money',
              },
        // {
        //   name: 'Vendor Orders',
        //   url: '/vendorslist/vendororders',
        //   icon: 'fa fa-cart-plus ',
        // },
      ]
    },
    {
      name: 'Vendors',
      url: '/vendorslist',
      icon: 'icon-user',
      children: [
        {
          name: 'Vendors List',
          url: '/vendorslist',
          icon: 'icon-user',
        },
        {
          name: 'Products for Approval',
          url: '/vendorslist/allvendorporducts',
          icon: 'fa fa-cart-plus ',
        },
        {
          name: 'Vendor Orders',
          url: '/vendorslist/vendororders',
          icon: 'fa fa-cart-plus ',
        },
        {
          name: 'Vendor Commison',
          url: '/commission/vendor',
          icon: 'fa fa-money',
        },
      ]
    },
    {
      name: 'User Management',
      url: '/userslist',
      icon: 'icon-user',
      children: [
        {
          name: 'Users',
          url: '/userslist',
          icon: 'icon-user',
        },
        {
          name: 'Users Orders',
          url: '/userslist/userorders',
          icon: 'fa fa-cart-plus ',
        }
      ]
    },
    {
      name: 'Coupon Management',
      url: '/coupons',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Ad Management',
      url: '/buttons',
      icon: 'icon-picture',
      children: [
        {
          name: 'Main Banner',
          url: '/buttons/buttons',
          icon: 'icon-picture '
        },
        {
          name: 'Feature Brands ',
          url: '/buttons/dropdowns',
          icon: 'icon-picture '
        },
        {
          name: 'Ecommerce Banners ',
          url: '/buttons/ecommercebanners',
          icon: 'icon-picture '
        },
        {
          name: 'Brand Categories',
          url: '/buttons/brandbanner',
          icon: 'icon-picture '
        },
        {
          name: 'Grocery  Banners',
          url: '/buttons/singlebanner',
          icon: 'icon-picture '
        }
      ]
    },


    {
      name: 'Content ',
      url: '/content',
      icon: 'fa fa-file-text-o',
      children: [
        {
          name: 'About Mahali',
          url: '/content',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Terms & Conditions',
          url: '/content/termsandconditions',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Privacy Policy',
          url: '/content/privacypolicy',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Top Sellers',
          url: '/content/topseller',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Our Blogs',
          url: '/content/ourblogs',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'News Letter',
          url: '/content/newsteller',
          icon: 'fa fa-file-text-o',
        },
      ]
    },

    // {
    //   name: 'Commision ',
    //   url: '/commission',
    //   icon: 'fa fa-money',
    //   children: [
    //     {
    //       name: 'Vendor',
    //       url: '/commission/vendor',
    //       icon: 'fa fa-money',
    //     },
    //     {
    //       name: 'Whole Seller',
    //       url: '/commission/wholeseller',
    //       icon: 'fa fa-money',
    //     }
    //   ]
    // },
    {
      name: 'Staff',
      url: '/staff',
      icon: 'icon-user',
    },
    {
      name: 'Ratings and Reviews ',
      url: '/ratings',
      icon: 'icon-user'
    },

  ];
}
else if (sessionStorage.role == 'wholesaler') {
  var newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      name: 'Vendor Orders',
      url: '/vendorslist/vendororders',
      icon: 'fa fa-cart-plus ',
    },

    {
      name: 'Wholeseller Products',
      url: '/wholesellerproducts',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Product',
          url: '/wholesellerproducts/addwholesellerproducts',
          icon: 'icon-calculator '
        },
        {
          name: 'My Products ',
          url: '/wholesellerproducts',
          icon: 'icon-calculator '
        },

      ]
    },
    {
      name: 'Change Password',
      url: '/changePassword',
      icon: 'icon-speedometer',

    },


  ];
} else if (sessionStorage.role == 'vendor') {
  var newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      name: 'My Account',
      url: '/vendoraccount',
      icon: 'icon-speedometer',

    },
    {
      name: 'Business Address',
      url: '/businessDetails',
      icon: 'icon-speedometer',

    },
    {
      name: 'Delivery Address',
      url: '/addressDetails',
      icon: 'icon-speedometer',

    },
    {
      name: 'Buy Products',
      url: '/buyProduct',
      icon: 'icon-speedometer',

    },
    {
      name: 'DeliverySlots',
      url: '/deliverySlots',
      icon: 'icon-speedometer',

    },
    {
      name: 'Change Password',
      url: '/changePassword',
      icon: 'icon-speedometer',

    },
    {
      name: 'Vendor Products',
      url: '/vendorproducts',
      icon: 'icon-user',
      children: [
        {
          name: 'Add Product',
          url: '/vendorproducts/addvendorproducts',
          icon: 'icon-calculator '
        },
        {
          name: 'My Products ',
          url: '/vendorproducts',
          icon: 'icon-calculator '
        },

      ]
    },
    {
      name: 'User Orders',
      url: '/vendorslist/vendororders',
      icon: 'fa fa-cart-plus ',
    },
  ]
} else {

  // location.reload();
  var newArr = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },

    {
      name: 'Main Categories',
      url: '/Category',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Categories',
          url: '/Category/categories',
          icon: 'icon-puzzle'
        },
        {
          name: 'Sub Categories',
          url: '/Category/subcategories',
          icon: 'icon-puzzle'
        },
        {
          name: 'Sub Sub Categories',
          url: '/Category/subsubcategories',
          icon: 'icon-puzzle'
        },
      ]
    },

    {
      name: 'Products',
      url: '/widgets',
      icon: 'icon-calculator',
    },
    {
      name: 'Requested Products',
      url: '/suggestedproducts',
      icon: 'fa fa-cart-plus ',
    },
    {
      name: 'Coupon Management',
      url: '/coupons',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Wholeseller ',
      url: '/wholeseller',
      icon: 'icon-user'
    },

    {
      name: 'Vendors',
      url: '/vendorslist',
      icon: 'icon-user',
      children: [
        {
          name: 'Vendors List',
          url: '/vendorslist',
          icon: 'icon-user',
        },
        {
          name: 'Products for Approval',
          url: '/vendorslist/allvendorporducts',
          icon: 'fa fa-cart-plus ',
        },
        {
          name: 'Vendor Orders',
          url: '/vendorslist/vendororders',
          icon: 'fa fa-cart-plus ',
        },
        {
                name: 'Vendor Commison',
                url: '/commission/vendor',
                icon: 'fa fa-money',
              },
        
      ]
    },
    {
      name: 'User Management',
      url: '/userslist',
      icon: 'icon-user',
      children: [
        {
          name: 'Users',
          url: '/userslist',
          icon: 'icon-user',
        },
        {
          name: 'Users Orders',
          url: '/userslist/userorders',
          icon: 'fa fa-cart-plus ',
        }
      ]
    },
    {
      name: 'Banner Management',
      url: '/buttons',
      icon: 'icon-picture',
      children: [
        {
          name: 'Main Banner',
          url: '/buttons/buttons',
          icon: 'icon-picture '
        },
        {
          name: 'Feature Brands ',
          url: '/buttons/dropdowns',
          icon: 'icon-picture '
        },
        {
          name: 'Ecommerce Banners ',
          url: '/buttons/ecommercebanners',
          icon: 'icon-picture '
        },
        {
          name: 'Brand Categories',
          url: '/buttons/brandbanner',
          icon: 'icon-picture '
        },
        {
          name: 'Grocery  Banners',
          url: '/buttons/singlebanner',
          icon: 'icon-picture '
        }
      ]
    },


    {
      name: 'Content ',
      url: '/content',
      icon: 'fa fa-file-text-o',
      children: [
        {
          name: 'About Mahali',
          url: '/content',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Terms & Conditions',
          url: '/content/termsandconditions',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Privacy Policy',
          url: '/content/privacypolicy',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Top Sellers',
          url: '/content/topseller',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'Our Blogs',
          url: '/content/ourblogs',
          icon: 'fa fa-file-text-o',
        },
        {
          name: 'News Letter',
          url: '/content/newsteller',
          icon: 'fa fa-file-text-o',
        },
      ]
    },

    // {
    //   name: 'Commision ',
    //   url: '/commission',
    //   icon: 'fa fa-money',
    //   children: [
    //     {
    //       name: 'Vendor',
    //       url: '/commission/vendor',
    //       icon: 'fa fa-money',
    //     },
    //     {
    //       name: 'Whole Seller',
    //       url: '/commission/wholeseller',
    //       icon: 'fa fa-money',
    //     }
    //   ]
    // },
    {
      name: 'Staff',
      url: '/staff',
      icon: 'icon-user',
    },
    {
      name: 'Ratings and Reviews ',
      url: '/ratings',
      icon: 'icon-user'
    },

  ];

}

export const navItems: NavData[] = newArr;
// export const navItems1: NavData[] = newArr1;
// export const navItems2: NavData[] = newArr2;






// var ShowArr = sessionStorage.role == 'wholesaler' ? newArr1 : newArr;


