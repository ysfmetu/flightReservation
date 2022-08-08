# Uçuş Rezervasyon Sistemi

Angular öğrenmek için yapılmış olan bir uygulamadır

## API tasarım 

flightReservationAPI projesi ile backend tarafına ulaşabilirsiniz...

## Sonuçta ne elde edeceğiz ??

Uygulama ile öncelikli olarak uçuş listesi sıralanmaktadır ... bunun için tarih ve istikamet yerlerini girdikten sonra arama yaparsak liste önümüze gelecektir.
uçuş güzergah ve tarihleri için ayrıca giriş ekranı yapılmamış olup veritabanından insert edebilirsiniz....
ekran görüntüsü aşağıdaki gibidir...
![image](https://user-images.githubusercontent.com/45200802/183426881-21547d7e-1550-4aef-b8b1-0a9c77098fff.png)


## 2. Aşama

Seçtiğimiz günde belirlediğimiz havayolu şirketini seçersek bizi bir sonraki aşamaya yönlendirmektedir.
burada seçtiğimiz şirkete ilgili kişiyi kaydetme aşamasıdır.
burda bir form oluşturuyoruz ve giriş ekranını dolduruyoruz ![image](https://user-images.githubusercontent.com/45200802/183428347-31319e83-2219-4551-8797-6cf0ae00e38b.png)


## Son aşama

eğer kaydımızı onaylarsak bize bir rezervasyon numarası vermektedir.Bu numarayı daha sonra Check-in kısmında kullanacağız....çünkü henüz uçuşumuz onaylanmamaıştır.
![image](https://user-images.githubusercontent.com/45200802/183428887-109e8df5-7fb2-439a-a2c7-e5ac46368aa1.png)


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
