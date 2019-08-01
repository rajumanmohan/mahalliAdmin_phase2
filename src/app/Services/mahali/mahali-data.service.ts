import { AppSettings } from './../constants/constants';
import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient , HttpHeaders } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  whole_id
  constructor(private http: HttpClient) {

  }
  adminlogin(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    return this.http.post(AppSettings.adminloginUrl, params, { headers });
  }
  getCat() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    return this.http.get(AppSettings.getCatUrl, { headers });
  }
  addCat(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    return this.http.post(AppSettings.addCatUrl, params, { headers: headers });
  }
  updateCat(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    return this.http.post(AppSettings.updateCat, params, { headers: headers });
  }
  deleteCat(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    return this.http.post(AppSettings.deleteCat, params, { headers: headers });
  }
  getProduct() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    return this.http.get(AppSettings.getProductUrl, { headers: headers });
  }
  getProductbyIdGro(id) {
    // const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getProductUrlbyIdGror + "/" + id, { headers: headers });
  }
  getProductbyIdEcom(id) {
    // const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getProductUrlbyIdEcom + "/" + id, { headers: headers });
  }
  deleteProduct(params) {
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(AppSettings.deleteProdUrl + '/' + params, { headers: headers });
  }
  updateProduct(prodId, params) {
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateProdUrl + "/" + prodId, params, { headers: headers });
  }
  insertVendorProduct(params) {
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.insertvendorProd, params, { headers: headers })
  }
  // deleteSkuProduct(params) {
  //     const headers = new Headers({ 'Content-Type': "application/JSON" });
  //     return this.http.post(AppSettings.deleteSkuUrl, params, { headers: headers });
  // }
  insertProduct(params) {
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.insertProduct, params, { headers: headers })
  }

  insertSubCat(params) {
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.insertSubCat, params, { headers: headers })
  }
  getSubCategery() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getSubCategory, { headers: headers });
  }
  deleteSubCat(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.deleteSubCat, params, { headers: headers })
  }
  updateSubCat(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.updateSubCat, params, { headers: headers })
  }
  addWholeseller(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.addWholeSellerUrl, params, { headers: headers })
  }
  getWholeSeller() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.get(AppSettings.getWholeSellerUrl, { headers: headers });
  }
  updateWholeSeller(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.updateWholeSellerUrl, params, { headers: headers })
  }
  deleteWholeSeller(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.deleteWholeSellerUrl, params, { headers: headers })
  }
  getUsersList() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.get(AppSettings.getUsersUrl, { headers: headers });
  }
  getVendorsList() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.get(AppSettings.getVendorsUrl, { headers: headers });
  }
  getBanners(type) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.get(AppSettings.getBannerUrl + "/" + type, { headers: headers });
  }
  addbanners(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.addbannerUrl, params, { headers: headers })
  }
  deletebanners(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.deletebannerUrl, params, { headers: headers })
  }
  changeProdStatus(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.changeSatusOfProd, params, { headers: headers })
  }
  saveFooter(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.saveFooter, params, { headers: headers })
  }
  getFooter(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.getFooter, params, { headers: headers })
  }
  updateFooter(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.updateFooter, params, { headers: headers })
  }
  getVouchers() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.get(AppSettings.getVouchers, { headers: headers });
  }
  addVoucher(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.addVoucher, params, { headers: headers })
  }
  getVoucherById(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getVoucherById + "/" + params, { headers: headers })
  }
  deleteVoucher(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(AppSettings.getVoucherById + "/" + params, { headers: headers })
  }
  updateVoucher(Id, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateVoucher + "/" + Id, params, { headers: headers })
  }
  getAllVendorOrds() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAllVendorOrders, { headers: headers })
  }
  addStaff(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.addStaff, params, { headers: headers })
  }
  updatestaff(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updatestaff, params, { headers: headers })
  }
  deletestaff(Id) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(AppSettings.deletestaffData + "/" + Id, { headers: headers });
  }
  staffLogin(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.staffLogin, params, { headers: headers })
  }
  getStaff() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getStaff, { headers: headers })
  }
  getVendorProds() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.getVendorProds + "/" + this.vendor_id + "/" + 0, { headers: headers })
  }
  getAllVendorApprovalProds() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.getAllVendorProducts + "/" + 2, { headers: headers })
  }
  getVendorProdsEcom() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.getVendorProdsEcom + "/" + this.vendor_id + "/" + 1, { headers: headers })
  }

  getWholesellerProds() {
    this.whole_id = (sessionStorage.wholesalerId)
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getWholesellerProds + "/" + this.whole_id, { headers: headers })
  }
  acceptProduct(vendorId, status) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.AcceptProduct + "/" + vendorId, status, { headers: headers })
  }
  updateWholesellerProds(params, prodId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateWholesellerPrords + "/" + prodId, params, { headers: headers })
  }
  getUserOrders() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getUserOrders, { headers: headers });
  }
  getratingsandreviews() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.ratingsandreviews, { headers: headers });
  }
  acceptRating(Id, params) {
    // const headers = new Headers({ 'Content-Type': "application/JSON" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateratings + "/" + Id, params, { headers: headers });
  }
  getsuggestedProds() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getsuggestedProds, { headers: headers });
  }
  getsugProdForCat(Id) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getsugProdForCat + "/" + Id, { headers: headers });
  }
  getCats(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.getCategories, params, { headers: headers });
  }
  // getEcomcats() {
  //   var headers: HttpHeaders = new HttpHeaders;
  // // headers = headers.append('Accept', 'application/json, text/plain, */*');
  // headers = headers.append('Content-Type', 'application/json; charset=utf-8');
  //     return this.http.get(AppSettings.getEcomcats, { headers: headers });
  // }
  getEcomSubcats() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getEcomSubCats, { headers: headers });
  }
  changeStatusOfSuggested(params, Id) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.changeSatusOfsuggest + "/" + Id, params, { headers: headers });
  }
  getGroceryProds() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getGroceryProds + "/" + 0, { headers: headers });
  }
  getEcomProds() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getGroceryProds + "/" + 1, { headers: headers });
  }
  getAdminCount() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAdminCount, { headers: headers });
  }
  getProdById(prodId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getProdById + "/" + prodId, { headers: headers });
  }
  prodsForAppr() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.approvalProds, { headers: headers });
  }
  orderById(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.ordById + "/" + params, { headers: headers });
  }
  updateVendorOrd(ordid, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateVendorOrd + "/" + ordid, params, { headers: headers });
  }
  showinWebEcom(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.showinWebEcom, params, { headers: headers });
  }
  getEcomCatCount() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getCatEcomcount, { headers: headers });
  }
  getGroceryCat(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.post(AppSettings.getGroceryCats, params, { headers: headers });
  }
  getEcomCat(params) {
    // const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', "application/x-www-form-urlencoded");
    return this.http.get(AppSettings.getEcomCats, { headers: headers });
  }
  getWholesellerProdsByGro(wholeId) {
    this.whole_id = (sessionStorage.wholesalerId != undefined || '' ? sessionStorage.wholesalerId : wholeId)
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getWholeProdsGro + "/" + this.whole_id + "/" + 0, { headers: headers })
  }
  getWholesellerProdsByEcom(wholeId) {
    this.whole_id = (sessionStorage.wholesalerId != undefined || '' ? sessionStorage.wholesalerId : wholeId)
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getWholeProdEcom + "/" + this.whole_id + "/" + 1, { headers: headers })
  }
  getVendorOrdInWhole(wholeId) {
    this.whole_id = (sessionStorage.wholesalerId) || wholeId
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getVendorOrdInWhole + "/" + this.whole_id, { headers: headers })
  }
  orderDetailsByOrdId(orderId, wholeId) {
    this.whole_id = (sessionStorage.wholesalerId) || wholeId
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.orderDetailsByOrdId + "/" + orderId + "/" + this.whole_id, { headers: headers })
  }
  orderChangeByProdId(prodId, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.orderChangeByProdId + "/" + prodId, params, { headers: headers })
  }
  getWholeCommision() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getWholeCommision, { headers: headers })
  }
  getVendorCommision() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getVendorCommision, { headers: headers })
  }
  // uploadProductImg(params) {
  //       var headers: HttpHeaders = new HttpHeaders;
  // headers = headers.append('Accept', 'application/json, text/plain, */*');
  // headers = headers.append('Content-Type', 'application/json; charset=utf-8');
  //     return this.http.post(AppSettings.uploadProductimg, params, { headers: headers })
  // }
  // public uploadFile(fileToUpload: File) {
  //     const _formData = new FormData();
  //     _formData.append('excelFile', fileToUpload, fileToUpload.name);
  //     return this.http.post(AppSettings.importExcel, _formData);
  // }
  // editproductImg(params) {
  //       var headers: HttpHeaders = new HttpHeaders;
  // headers = headers.append('Accept', 'application/json, text/plain, */*');
  // headers = headers.append('Content-Type', 'application/json; charset=utf-8');
  //     return this.http.post(AppSettings.multiproductimgUrl, params, { headers: headers })
  // }
  // getSubCat(params) {
  //       var headers: HttpHeaders = new HttpHeaders;
  // headers = headers.append('Accept', 'application/json, text/plain, */*');
  // headers = headers.append('Content-Type', 'application/json; charset=utf-8');
  //     return this.http.post(AppSettings.getSubCatUrl, params, { headers: headers })
  // }
  // deleteProdImg(params) {
  //       var headers: HttpHeaders = new HttpHeaders;
  // headers = headers.append('Accept', 'application/json, text/plain, */*');
  // headers = headers.append('Content-Type', 'application/json; charset=utf-8');
  //     return this.http.post(AppSettings.deleteProImgUrl, params, { headers: headers })
  // }
  // getVendors() {
  //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
  //     return this.http.get(AppSettings.getVendorUrl, { headers: headers })
  // }
  // getVendorsbyId(id) {
  //       var headers: HttpHeaders = new HttpHeaders;
  // headers = headers.append('Accept', 'application/json, text/plain, */*');
  // headers = headers.append('Content-Type', 'application/json; charset=utf-8');
  //     return this.http.get(AppSettings.getVendorById + id, { headers: headers })
  // }
  updateVendorbyId(params, venId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateVendorById + "/" + venId, params, { headers: headers })
  }
  getUserOrdByVenId(venId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.get(AppSettings.getUserOrdByVenId + "/" + venId, { headers: headers });
  }
  orderDetByVenId(ordId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.get(AppSettings.orderDetByVenId + "/" + ordId, { headers: headers });
  }
  getbannerById(banId, imgId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.get(AppSettings.getbannerById + "/" + banId + "/" + imgId, { headers: headers });
  }
  updateBanner(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.put(AppSettings.updateBanner, params, { headers: headers });
  }
  insertAdminProd(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.insertAdminProd, params, { headers: headers })
  }
  getAdminProds(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.getAdminProds, params, { headers: headers })
  }
  forgotPassword(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.forgotPw, params, { headers: headers });
  }
  otpVerify(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.otpUrl, params, { headers: headers });
  }
  changePwForgot(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.changeForgot, params, { headers: headers });
  }
  delproduct(skuimgId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.delproduct + "/" + skuimgId, { headers: headers });
  }
  getWholeProddsCunt() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.whole_id = (sessionStorage.wholesalerId)
    return this.http.get(AppSettings.getWholeProddsCunt + "/" + this.whole_id, { headers: headers });
  }
  // new admin modifications
  deleteAdminProdUrl(adminProdId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(AppSettings.deleteAdminProdUrl + "/" + adminProdId, { headers: headers });
  }
  // new
  getAdminProdData(catId, subId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.whole_id = (sessionStorage.wholesalerId)
    return this.http.get(AppSettings.getAdminProdData + "/" + catId + "/" + subId, { headers: headers });
  }
  getAdminProdById() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.whole_id = (sessionStorage.wholesalerId)
    return this.http.get(AppSettings.getAdminProdById, { headers: headers });
  }
  wholesalerById(prodId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.whole_id = (sessionStorage.wholesalerId)
    return this.http.get(AppSettings.wholesalerProdById + "/" + prodId, { headers: headers });
  }
  ImgApproval(skid, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.put(AppSettings.ImgApproval + "/" + skid, params, { headers: headers });
  }
  addSubsub(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.addSubsub, params, { headers: headers });
  }
  getSubsub() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.whole_id = (sessionStorage.wholesalerId)
    return this.http.get(AppSettings.getSubsub + "/" + 0, { headers: headers });
  }
  getSubsubEcom() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.whole_id = (sessionStorage.wholesalerId)
    return this.http.get(AppSettings.getSubsubEcom + "/" + 1, { headers: headers });
  }
  delSubsub(prodId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(AppSettings.delSubsub + "/" + prodId, { headers: headers });
  }
  updateSubsub(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.put(AppSettings.updateSubsub, params, { headers: headers });
  }
  prodCat(catId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.prodCat + "/" + catId, { headers: headers })
  }
  prodSub(subId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.prodSub + "/" + subId, { headers: headers })
  }
  prodSubsub(subsub) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.prodSubsub + "/" + subsub, { headers: headers })
  }
  reqAdmin(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.requestAdmin, params, { headers: headers });
  }
  prodSubAdmin(subId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAdminSub + "/" + subId, { headers: headers })
  }
  prodSubsubAdmin(subsub) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAdminSubSub + "/" + subsub, { headers: headers })
  }
  ImgApprovalForVendor(skid, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.userId;
    return this.http.put(AppSettings.vendorImgagesAppr + "/" + skid, params, { headers: headers });
  }
  getAllVendorProds(vendorId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAllVendorData + "/" + vendorId + "/" + 2, { headers: headers })
  }
  vendor_id;
  getPlaceOrder() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.getPlaceOrd + "/" + this.vendor_id, { headers: headers });
  }
  getGraph(body) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.getGraph, body, { headers: headers });
  }
  getWholeSaleGraph(body) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.vendorwholesallergraphs, body, { headers: headers });
  }
  getUserSaleGraph(body) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.userGraph, body, { headers: headers });
  }
  getvendorCount() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.getvendorCount + "/" + this.vendor_id, { headers: headers });
  }
  getWholeOrders() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.whole_id = sessionStorage.getItem('wholesalerId');
    return this.http.get(AppSettings.wholeOrders + "/" + this.whole_id, { headers: headers });
  }
  vendorOrders() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.vendorOrders + "/" + this.vendor_id, { headers: headers });
  }
  filterUserOrders(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.filterUserOrders + "/" + 2 + "/" + 0, params, { headers: headers });
  }
  filterVendorOrders(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.filterVendorOrders + "/" + 2 + "/" + 1, params, { headers: headers });
  }
  getAdminbyId(prodId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.get(AppSettings.getAdminbyId + "/" + prodId, { headers: headers });
  }
  updateAdminProd(prodId, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.updateAdminProd + "/" + prodId, params, { headers: headers });
  }
  updateWholeProd(prodId, params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    // this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.put(AppSettings.updateWholeProd + "/" + prodId, params, { headers: headers });
  }
  graphWhole(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('wholesalerId');
    return this.http.post(AppSettings.graphWhole + "/" + this.vendor_id, params, { headers: headers });
  }
  postAttributeMst(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.attrmst + "/", params, { headers: headers });
  }
  graphVendor(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.getItem('vemdorId');
    return this.http.post(AppSettings.vandorGraph + "/" + this.vendor_id, params, { headers: headers });
  }
  loginDetailsbyEmail(formValaues) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.loginDetailsUrl + formValaues, { headers: headers })
  }
  getAccDetails() {
    this.vendor_id = sessionStorage.vemdorId;
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAccDetails + "/" + this.vendor_id, { headers: headers });
  }
  updateAddData(params, addId) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateAddress + "/" + this.vendor_id + "/" + addId, params, { headers: headers });
  }
  updateAcc(params) {
    this.vendor_id = sessionStorage.vemdorId;
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateAcc + "/" + this.vendor_id, params, { headers: headers });
  }
  role;
  updateProfile(params) {
    this.role = sessionStorage.role;
    this.vendor_id = this.role == 'vendor' ? sessionStorage.vemdorId : sessionStorage.wholesalerId
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(AppSettings.updateProfile + "/" + this.vendor_id, params, { headers: headers })
  }
  getUserOrdersbyVenId1() {
    this.vendor_id = sessionStorage.vemdorId;
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getUserOrdersbyVenId + "/" + this.vendor_id, { headers: headers });
  }
  userOrdDetails(ordId) {
    // this.vendor_id = sessionStorage.vemdorId;
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.userOrdDetails + "/" + ordId, { headers: headers });
  }
  getAddress() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.vemdorId;
    // this.vendor_id = sessionStorage.getItem('userId');
    return this.http.get(AppSettings.getAddress + "/" + this.vendor_id, { headers: headers });
  }
  getAddedData() {
    this.vendor_id = sessionStorage.vemdorId;
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAddedData + "/" + this.vendor_id + "/" + 0, { headers: headers });
  }
  changePwd(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.vemdorId ? sessionStorage.vemdorId : sessionStorage.wholesalerId

    return this.http.post(AppSettings.changePwdUrl + "/" + this.vendor_id, params, { headers: headers });
  }
  getDelSlots() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.vemdorId;
    return this.http.get(AppSettings.getDelSlots + "/" + this.vendor_id, { headers: headers });
  }
  delDelSlot(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    this.vendor_id = sessionStorage.vemdorId;
    return this.http.delete(AppSettings.delDelSlot + "/" + params, { headers: headers });
  }
  delAddress(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(AppSettings.delAddress + "/" + params, { headers: headers });
  }
  AddSlots(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.AddSlots, params, { headers: headers });
  }
  AdddelCharges(params) {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(AppSettings.AdddelCharges, params, { headers: headers });
  }
  getAttributes() {
    var headers: HttpHeaders = new HttpHeaders;
    headers = headers.append('Accept', 'application/json, text/plain, */*');
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(AppSettings.getAttributes, { headers: headers });
  }
  // deleteVendorbyId(id) {
  //     const headers = new Headers({ 'Content-Type': "application/JSON" });
  //     return this.http.delete(AppSettings.deleteVendorById + id, { headers: headers })
  // }
  // //offers
  // getOffers() {
  //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
  //     return this.http.get(AppSettings.getOffersUrl, { headers: headers })
  // }
  // postOffersUrl(data) {
  //     const headers = new Headers({ 'Content-Type': "application/JSON" });
  //     return this.http.post(AppSettings.postOffersUrl, data, { headers: headers })
  // }
  // getOfferbyId(id) {
  //     const headers = new Headers({ 'Content-Type': "application/JSON" });
  //     return this.http.get(AppSettings.getOfferbyId + id, { headers: headers })
  // }
  // updateOfferById(id, params) {
  //     const headers = new Headers({ 'Content-Type': "application/JSON" });
  //     return this.http.put(AppSettings.updateOfferById + id, params, { headers: headers })
  // }
  // deleteOfferById(id) {
  //     const headers = new Headers({ 'Content-Type': "application/JSON" });
  //     return this.http.delete(AppSettings.deleteOfferById + id, { headers: headers })
}
    //delivery
    // addDeliveryUrl(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addDeliveryUrl, params, { headers: headers });
    // }
    // getOrders() {
    //     const headers = new Headers({
    //         'Content-Type': "application/JSON",
    //     });
    //     return this.http.get(AppSettings.getOrdersUrl, { headers: headers });
    // }
    // getDelivery() {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.getDeliveryUrl, { headers: headers });
    // }
    // getDeliverybyId(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getDeliveryById, params, { headers: headers });
    // }
    // updateDelivery(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updateDeliveryUrl, params, { headers: headers });
    // }
    // deleteDelivery(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteDeliveryById, id, { headers: headers });
    // addLocation(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getCountriesUrl, params, { headers: headers });
    // }
    // getCountries() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getCountriesUrl, { headers: headers })
    // }
    // getStatedUrl(id) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getStatesUrl + '/' + id, { headers: headers })
    // }
    // getCityUrl(id) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getCityUrl + '/' + id, { headers: headers })
    // }
    // getAreaUrl(id) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getAreaUrl + '/' + id, { headers: headers })
    // }
    // addLocation(params) {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.post(AppSettings.addLocation, params, { headers: headers })
    // }
    // getLocation() {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.get(AppSettings.getLocation, { headers: headers })
    // }
    // deleteLocation(id) {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.delete(AppSettings.deleteLocation + "/" + id, { headers: headers })
    // }
    // // termsConditions(params) {
    // //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    // //     return this.http.post(AppSettings.getStatesbyId, params, { headers: headers })
    // // }
    // postBannerUrl(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.postbannersUrl, params, { headers: headers })
    // }
    // getBannerUrl() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getBannerUrl, { headers: headers })
    // }
    // deleteBanner(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteBannerUrl, params, { headers: headers })
    // }
    // editBannerbyId(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.editBannerUrl, params, { headers: headers })
    // }
    // updateBannerbyId(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updatebannerUrl, params, { headers: headers })
    // }
    // getBannerPostion() {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.get(AppSettings.bannerPositionUrl, { headers: headers })
    // }
    // addCity(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addCityUrl, params, { headers: headers })
    // }
    // getCity() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getCitiesUrl, { headers: headers })
    // }

    // getcitById(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getCityByID, params, { headers: headers })
    // }

    // deleteCity(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteCitiesUrl, params, { headers: headers })
    // }
    // updateCity(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updateCityUrl, params, { headers: headers })
    // }
    // addArea(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addAreaUrl, params, { headers: headers })
    // }
    // getArea() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getAreasUrl, { headers: headers })
    // }

    // getareaById(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getAreaById, params, { headers: headers })
    // }

    // deleteArea(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteAreaUrl, params, { headers: headers })
    // }
    // updateArea(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updateAreaUrl, params, { headers: headers })
    // }
    // addWarehouse(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addwarehouseUrl, params, { headers: headers })
    // }
    // getwarehouse() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getwarehouseurl, { headers: headers })
    // }
    // updatewarehouse(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.updatewarehouseUrl, params, { headers: headers })
    // }

    // getwarehouseById(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.getWarehouseById, params, { headers: headers })
    // }

    // deleteWareHoue(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteWarehouse, params, { headers: headers })
    // }
    // addSlot(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.addslotUrl, params, { headers: headers })
    // }
    // getSlot() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getSlotUrl, { headers: headers })
    // }
    // deleteSlot(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.deleteslotUrl, params, { headers: headers })
    // }
    // termsFooter(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.termsFooterUrl, params, { headers: headers })
    // }
    // getTerms() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getTermsUrl, { headers: headers })
    // }
    // getAboutUs() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getAboutusUrl, { headers: headers })
    // }
    // getDeliveryInfo() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getDeliveryInfoUrl, { headers: headers })
    // }
    // getPrivacyPolicy() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getPrivacyUrl, { headers: headers })
    // }
    // updateTerms(params) {
    //     const headers = new Headers({ 'Content-Type': "application/json" });
    //     return this.http.post(AppSettings.updateTermsUrl, params, { headers: headers })
    // }
    // updateAboutUs(params) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.post(AppSettings.updateAboutUsUrl, params, { headers: headers })
    // }
    // updateDeliveryInfo(params) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.post(AppSettings.updateDeliveryInfoUrl, params, { headers: headers })
    // }
    // updateprivacy(params) {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.post(AppSettings.updatePrivacyUrl, params, { headers: headers })
    // }
    // postDealBannerUrl(params) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.post(AppSettings.postDealbannersUrl, params, { headers: headers })
    // }
    // getDealBannerUrl() {
    //     const headers = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    //     return this.http.get(AppSettings.getDealBannerUrl, { headers: headers })
    // }
    // deleteDealBanner(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.delete(AppSettings.deleteDealBannerUrl + '/' + id, { headers: headers })
    // }
    // updateDealBanner(id) {
    //     const headers = new Headers({ 'Content-Type': "application/JSON" });
    //     return this.http.put(AppSettings.updateDealbannerUrl + '/' + id, { headers: headers })
    // }
