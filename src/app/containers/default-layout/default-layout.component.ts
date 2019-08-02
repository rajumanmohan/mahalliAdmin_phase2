import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(public router: Router, @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  ngOnInit() {
    this.roleActions();
  }
  roleActions() {
    if (sessionStorage.role == 'Admin') {
      this.navItems = [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer',
        },

        {
          name: 'Categories',
          url: '/Category',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Category',
              url: '/Category/categories',
              icon: 'icon-puzzle'
            },
            {
              name: 'Sub Category',
              url: '/Category/subcategories',
              icon: 'icon-puzzle'
            },
            {
              name: 'Sub Sub Category',
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
          name: 'Product Master',
          url: '/suggestedproducts',
          icon: 'fa fa-cart-plus ',
        },

        {
          name: 'Wholeseller ',
          url: '/wholeseller',
          icon: 'icon-user'
        },
        {
          name: 'Attribute Master',
          url: '/attrimaster',
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
              name: 'Product Approvals',
              url: '/vendorslist/allvendorporducts',
              icon: 'fa fa-cart-plus ',
            },
            {
              name: 'Vendor Orders',
              url: '/vendorslist/vendororders',
              icon: 'fa fa-cart-plus ',
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

        {
          name: 'Commision ',
          url: '/commission',
          icon: 'fa fa-money',
          children: [
            {
              name: 'Vendor',
              url: '/commission/vendor',
              icon: 'fa fa-money',
            },
            {
              name: 'Whole Seller',
              url: '/commission/wholeseller',
              icon: 'fa fa-money',
            }
          ]
        },
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
      this.navItems = [
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
          name: 'Password Management',
          url: '/changePassword',
          icon: 'icon-speedometer',

        },


      ];
    } else if (sessionStorage.role == 'vendor') {
      this.navItems = [
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
          name: 'Business Details',
          url: '/businessDetails',
          icon: 'icon-speedometer',

        },
        {
          name: 'Delivery Address',
          url: '/addressDetails',
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
          name: 'Buy Products',
          url: '/buyProduct',
          // target:'_blank',
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
      this.navItems = [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer',
        },

        {
          name: 'Categories',
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

        {
          name: 'Commision ',
          url: '/commission',
          icon: 'fa fa-money',
          children: [
            {
              name: 'Vendor',
              url: '/commission/vendor',
              icon: 'fa fa-money',
            },
            {
              name: 'WholeSeller',
              url: '/commission/wholeseller',
              icon: 'fa fa-money',
            }
          ]
        },
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
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  logOut() {
    sessionStorage.clear();
    // window.location('/')
    this.router.navigate(['/']);
    // if(this.router.navigate(['/'])){
    //   location.reload();
    // }
    // if (this.router.navigate(["/"])) {
    //   location.reload();
    // }

  }
}
