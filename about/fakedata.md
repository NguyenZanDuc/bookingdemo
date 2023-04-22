## about
#### Form A

```json
    Tên chỗ nghỉ là gì
{
    "nameHotel": "Muong Thanh Hotel",
    "star": 4
}
```
#### Form B
```json
    Chi tiết liên hệ của chỗ nghỉ là gì?
{
    "nameManager": "Muong Thanh Hotel",
    "phoneNumber": "+84 368656127",
    "nameCompany": "Nikey" //null
}
```
#### Form C
```json
Quý vị có sử dụng công cụ quản lý kênh không?
{
    "nameToolManager": "Oze",
}
```
#### Form D
```json
Chỗ nghỉ tọa lạc ở đâu?
{
    "street": "105 Nguyễn Đức Cảnh",
    "moreAddress":"...",
    "city": "hoang mai",
    "portalCode":12312
}
```
## createRoom
#### Form A
```json
    Room
{
    "nameRoom":"Phong Dulex",
    "nameOption": "asas", //null
    "smoking":"không hút thuốc",
    "numberRoom": 2
}
```
#### Form B
```json
    bed option
{
    "bedOption":[{"typeBed": "Giường đơn / Rộng 90-130","numberBed": 2}],
    "numberPeople": 3
}
```
#### Form C
```json
   room size
{
    "roomSize": 100 //null
}
```
#### Form D
```json
   Price/night
{
    "price": 800000 //null
}
```

## Facilities
#### Form A
```json
   park
{
    "park": "Có, miễn phí",
    "isPrivate": true,
    "isInside": true,
    "isReservation": true
}
```
#### Form B
```json
   breakFast
{
    "haveBreakfast": true,
    "type": "Á"
}
```
#### Form C
```json
   breakFast
{
    "languare": ["VN","ES"]
}
```
#### Form D
```json
   bestFacility
{
    "bestFacility": ["Wi-Fi miễn phí","Nha hang"]
}
```
## Amenities
#### formA
```json
    extra bed option
{
    "isExtraBedOption": true
}
```
#### formB
```json
    comfort
{
    "favourite": ["Điều hòa không khí","..."],
    "insideRoom": [""],
    "bathRoom": [""],
    "mediaAndTech": [""],
    "foot":[""],
    "outSize": [""],
    "disabilitiesService": [""],
    "familyService": [""]
}
```
## photos
```json
    images
{
    "images": [""]
}
```
## policies
#### form A
```json
    Cancel
{
    "dayCanCancel": 2,
    "priceAll": true 
}
```
#### form B
```json
    Bảo hiểm đối với những đặt phòng do nhầm lẫn
{
    "isSecu": true
}
```
#### form C
```json
    Check in - Check out
{
    "checkIn": "12:00, 14:00",
    "checkOut": "10:00, 12:00"
}
```
#### form D
```json
    Children
{
    "isChildren": true,
}
```
#### form E
```json
    Children
{
    "isPet": true,
}
```
## settings
#### form A
```json
Lựa chọn thanh toán của khách
{
    "isCreditCard": true,
    "creditCards": ["america","visa"]
}
```
#### form B
```json
Thanh toán hoa hồng
{
    "invoiceRecipient":"nguyen duc",
    "isGenericAddress": true,
    "Address": ""//null
}
```
#### form C
```json
{
    "isAvailability": true
}
```























ết kế cho Khách khuyết tật","Phòng có giường cỡ King với Bồn tắm Spa","Phòng có giường cỡ King nhìn ra cảnh núi non"]

# Note
```json
Option value
{
    "coutry": ["Abkhazia","Afghanistan","Ai Cập","Albania","Algeria","Andorra","Angola","Anguilla","Antigua  Barbuda","Argentina","Armenia","Aruba","Azerbaijan","Áo","Ba Lan","Bahamas","Bahrain","Bangladesh","Barbados","Belize","Benin","Bermuda","Bỉ","Bolivia","Bonaire St Eustatius và Saba","Bosnia và Herzegovina","Botswana","Brazil","Brunei Darussalam (Brunây)","Bulgaria","Burkina Faso","Burundi","Butan","Bồ Đào Nha","Bờ Biển Ngà","Bắc Macedonia","Bắc Síp","Cameroon","Campuchia","Canada","Cape Verde","Chad","Chile","Colombia","Comoros","Congo (Công gô)","Congo (Cộng hòa Dân chủ Công gô)","Costa Rica","Croatia","Curaçao","Cyprus (Cộng hoà Síp)","Các tiểu đảo của Hoa Kỳ","Cộng hoà Séc","Cộng hòa Dominica","Cộng hòa Gabon","Djibouti","Dominica","Ecuador","El Salvador","Equitorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Gambia","Georgia","Ghana","Gibraltar","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guiana thuộc Pháp","Guinea","Guinea-Bissau","Guyana","Haiti","Hà Lan","Hàn Quốc","Honduras","Hungary","Hy Lạp","Hồng Kông","Iceland (Ai-xơ-len)","Indonesia","Iraq","Ireland (Ai Len)","Israel","Jamaica","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Latvia","Lào","Lebanon (Li-băng)","Lesotho","Liberia","Libya (Li-bi)","Liechtenstein","Lithuania","Liên bang Saint Kitts và Nevis","Luxembourg","Lãnh thổ Palestine","Lãnh thổ miền Nam nước Pháp","Lãnh thổ Ấn Độ Dương thuộc Anh","Ma Cao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Montenegro","Montserrat","Morocco (Ma Rốc)","Mozambique","Myanmar","Mỹ","Mông Cổ","Na Uy","Nam Cực","Nam Phi","Nam Sudan","Namibia","Nauru","Nepal","New Caledonia","New Zealand","Nhật Bản","Nicaragua","Niger","Nigeria","Niue","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Pháp","Philippines","Phần Lan","Pitcairn","Polynesia thuộc Pháp","Puerto Rico","Qatar","Quần đảo Cocos (Kneeling)","Quần đảo Bắc Mariana","Quần đảo Cayman","Quần đảo Falkland (Malvinas)","Quần đảo Faroe","Quần đảo Heard và McDonald","Quần đảo Marshal","Quần đảo Nam Georgia và Nam Sandwich","Quần đảo Solomon","Quần đảo Svalbard và Jan Mayen","Quần đảo Turks và Caicos","Quần đảo Virgin thuộc Anh","Quần đảo Virgin thuộc Hoa Kỳ","Reunion","Romania","Rwanda (Ruan-đa)","Saint Barthelemy","Saint Lucia","Saint Martin","Samoa","Samoa (Mỹ)","San Marino","Saudi Arabia (Ả-rập Xê-út)","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Somalia","Sri Lanka","St. Pierre và Miquelon","Suriname","São Tomé và Príncipe","Tajikistan","Tanzania","Thái Lan","Thổ Nhĩ Kỳ","Thụy Sỹ","Thụy Điển","Togo","Tokelau","Tonga","Trinidad và Tobago","Trung Phi","Trung Quốc","Tunisia","Turkmenistan","Tuvalu","Tây Ban Nha","Uganda","Ukraine","United Arab Emirates (Các Tiểu Vương Quốc Ả Rập Thống Nhất)","Uruguay","Uzbekistan","Úc","Vanuatu","Vatican (Thành Va-ti-căng)","Venezuela","Việt Nam","Vương Quốc Anh","Wallis và Futuna","Yemen","Ý","Zambia","Zimbabwe","Đan Mạch","Đài Loan","Đảo Bouvet","Đảo Christmas","Đông Timor","Đức","Đảo Cook","Đảo Man","Đảo Norfolk","Đảo Saint Vincent và Grenadines","Đảo St. Helena","Ấn Độ"],
    "typeRoom": ["Phòng đơn","Phòng giường đôi","Phòng 2 giường đơn﻿","Phòng giường đôi/2 giường đơn","Phòng 3 người","Phòng 4 người","Phòng gia đình","Suite","Studio","Căn hộ","Phòng tập thể","Giường trong phòng tập thể"]
    ,
    "nameRoom": ["Phòng Business 1 Giường Đôi với Quyền sử dụng Phòng tập thể dục","Phòng Có Giường Cỡ Queen Nhìn Ra Hồ Bơi","Phòng Deluxe Giường Đôi","Phòng Tiêu Chuẩn Có Giường Cỡ King","Phòng Có Giường Cỡ King - Phù Hợp Cho Khách Khuyết Tật","Phòng Có Giường Cỡ King","Phòng Có Giường Cỡ King Nhìn Ra Biển","Phòng Có Giường Cỡ King Nhìn Ra Hồ Bơi","Phòng Có Giường Cỡ King Nhìn Ra Hồ Nước","Phòng Có Giường Cỡ King Nhìn Ra Vườn","Phòng Có Giường Cỡ King Với Ban Công","Phòng Có Giường Cỡ King Với Phòng Tắm Phù Hợp Cho Người Đi Xe Lăn - Phù Hợp Cho Khách Khuyết Tật","Phòng Có Giường Cỡ Queen","Phòng Có Giường Cỡ Queen Nhìn Ra Biển","Phòng Có Giường Cỡ Queen Nhìn Ra Vườn","Phòng Có Giường Cỡ Queen Và Bồn Tắm Spa","Phòng Có Giường Cỡ Queen Với Ban Công","Phòng Có Giường Cỡ Queen Với Phòng Tắm Chung","Phòng Deluxe","Phòng Deluxe (1 Người lớn + 1 Trẻ em","Phòng Deluxe (1 người lớn + 2 trẻ em","Phòng Deluxe (2 Người lớn + 1 Trẻ em","Phòng Deluxe Có Giường Cỡ Queen","Phòng Deluxe Có Giường Cỡ King","Phòng Deluxe Giường Đôi (1 người lớn + 1 trẻ em","Phòng Deluxe Giường Đôi Có Vòi Sen","Phòng Deluxe Giường Đôi Có Ban Công","Phòng Deluxe Giường Đôi Có Bồn Tắm","Phòng Deluxe Giường Đôi Kèm Giường Phụ","Phòng Deluxe Giường Đôi Nhìn Ra Biển","Phòng Deluxe Giường Đôi Nhìn Ra Biển Từ Phía Bên Cạnh","Phòng Deluxe Giường Đôi Với Ban Công và Tầm Nhìn Ra Biển","Phòng Deluxe Giường Đôi/2 Giường Đơn","Phòng Deluxe Giường đôi (1 người lớn + 2 trẻ em","Phòng Deluxe Đôi Nhìn ra Lâu đài"," selected="">Phòng Giường Đôi","Phòng Giường Đôi (1 Người lớn + 1 Trẻ em","Phòng Giường Đôi - Có thiết kế cho Khách khuyết tật","Phòng Giường Đôi Có Phòng Tắm Riêng","Phòng Giường Đôi Có Ban Công","Phòng Giường Đôi Có Ban Công (2 Người Lớn + 1 Trẻ Em","Phòng Giường Đôi Có Ban Công (3 Người Lớn","Phòng Giường Đôi Có Bồn Tắm Spa","Phòng Giường Đôi Có Giường Phụ","Phòng Giường Đôi Có Sân Hiên","Phòng Giường Đôi Có Sân Trong","Phòng Giường Đôi Hạng Bình Dân","Phòng Giường Đôi Hạng Tiết Kiệm","Phòng Giường Đôi Lớn","Phòng Giường Đôi Nhìn Ra Biển","Phòng Giường Đôi Nhìn Ra Hồ Bơi","Phòng Giường Đôi Nhìn Ra Hồ Nước","Phòng Giường Đôi Nhìn Ra Núi","Phòng Giường Đôi Nhìn Ra Vườn","Phòng Giường Đôi Nhỏ","Phòng Giường Đôi Với Phòng Tắm Chung","Phòng Giường Đôi Với Phòng Tắm Riêng Bên Ngoài","Phòng Giường Đôi có Ban công và Nhìn ra Biển","Phòng Giường Đôi với Nhà vệ sinh Chung","Phòng Giường đôi Deluxe (2 Người lớn + 1 Trẻ em","Phòng Superior Có Giường Cỡ King","Phòng Superior Có Giường Cỡ Queen","Phòng Superior Giường Đôi","Phòng Tiêu Chuẩn Có Giường Cỡ Queen","Phòng Tiêu Chuẩn Giường Đôi","Phòng Tiêu Chuẩn Giường Đôi Có Quạt Máy","Phòng Tiêu Chuẩn Giường Đôi Với Phòng Tắm Chung","Phòng có Giường cỡ Queen - Có thiết kế cho Khách khuyết tật","Phòng có giường cỡ King với Bồn tắm Spa","Phòng có giường cỡ King nhìn ra cảnh núi non"],

    "bedOption":["Phòng đơn","Phòng giường đôi","Phòng 2 giường đơn﻿","Phòng giường đôi/2 giường đơn","Phòng 3 người","Phòng 4 người","Phòng gia đình","Suite","Studio","Căn hộ","Phòng tập thể","Giường trong phòng tập thể"],
    "numberBedOption":[1,2,3,4,5,6,7,8,9,10],
    "favourite": ["Điều hòa không khí","Bồn tắm","Bồn tắm spa","TV màn hình phẳng","Ấm đun nước điện","Ban công","Tầm nhìn ra khung cảnh","Sân hiên"],
    "InsideRoom": ["Giá treo quần áo","Giá phơi quần áo","Giường xếp","Giường sofa","Điều hòa không khí","Tủ hoặc phòng để quần áo","Sàn trải thảm","Phòng thay quần áo","Giường cực dài (> 2 mét)","Quạt máy","Lò sưởi","Hệ thống sưởi","Có phòng thông nhau qua cửa nối","Bàn ủi","Tiện nghi ủi","Màn chống muỗi","Lối vào riêng","Két an toàn","Ghế sofa","Hệ thống cách âm","Khu vực tiếp khách","Sàn lát gạch/đá cẩm thạch","Bàn ủi li quần","Sàn lát gỗ","Bàn làm việc","Không gây dị ứng","Sản phẩm lau rửa","Chăn điện"],
    "bathRoom": ["Giấy vệ sinh","Bồn tắm","Chậu rửa vệ sinh (bidet)","Bồn tắm hoặc Vòi sen","Áo choàng tắm","Phòng tắm riêng","Đồ vệ sinh cá nhân miễn phí","Máy sấy tóc","Bồn tắm spa","Phòng tắm chung","Vòi sen","Dép","Nhà vệ sinh"],
    "mediaAndTech":["Máy vi tính","Thiết bị chơi game","Thiết bị chơi game - Nintendo Wii","Thiết bị chơi game - PS2","Thiết bị chơi game - PS3","Thiết bị chơi game - Xbox 360","Máy tính xách tay","iPad","Truyền hình cáp","Đầu đĩa CD","Đầu đĩa DVD","Máy fax","Ổ cắm cho iPod","Két an toàn cỡ laptop","TV màn hình phẳng","Truyền hình trả tiền","Đài radio","Truyền hình vệ tinh","Điện thoại","TV","Đầu video","Trò chơi điện tử","Đầu đĩa Blu-ray"],
    "foot":["Khu vực phòng ăn","Bàn ăn","Tiện nghi BBQ","Bếp nấu","Máy nướng bánh mỳ","Ấm đun nước điện","Khu vực ăn uống ngoài trời","Bàn ghế ngoài trời","Minibar","Bếp nhỏ","Đồ bếp","Lò vi sóng","Tủ lạnh","Máy pha trà/cà phê","Máy pha Cà phê","Ghế cao dành cho trẻ em"],
    "service": ["Quyền sử dụng Executive Lounge","Đồng hồ báo thức","Dịch vụ báo thức","Dịch vụ báo thức","Ra trải giường","Khăn tắm","Khăn tắm/Bộ khăn trải giường (có thu phí)"],
    "outSide":["Ban công","Sân trong","Tầm nhìn ra khung cảnh","Sân hiên","Nhìn ra thành phố","Nhìn ra vườn","Nhìn ra hồ","Nhìn ra địa danh nổi tiếng","Nhìn ra núi","Nhìn ra hồ bơi","Nhìn ra sông","Nhìn ra biển"],
    "disabilities":["Phòng nằm ở tầng trệt","Phòng hoàn toàn có thể tiếp cận bằng xe lăn","Các tầng trên đi lên bằng thang máy","Các tầng trên chỉ lên được bằng cầu thang","Toilet dành cho người khuyết tật"],
    "familyService":["Cửa an toàn cho trẻ nhỏ","Trò chơi board game/giải đố","Sách, đĩa DVD và nhạc cho trẻ em","Nắp che ổ cắm điện an toàn"]
    

    



}