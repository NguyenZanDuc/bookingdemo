[Get http://localhost:3000/hotel?category=Khach%20san&&address=Danang](http://localhost:3000/hotel)
```json
response
{
    "id": "121312",
    "name": "Raon Danang Beach",
    "image": "url",
    "star": 3,
    "address":"Bai bien mi khe, Da Nang",
    "tags": ["gap bien","cho nghi duong ben vung"],
    "description":"Tọa lạc tại thành phố Đà Nẵng, cách Bãi biển Mỹ Khê 400 m và Bãi biển Bắc Mỹ An chưa đầy 1 km, Raon Danang Beach cung cấp chỗ nghỉ với sảnh khách chung và WiFi miễn phí trong toàn bộ khuôn viên cũng...",
    "rate": 9.1
}
```
\
\
\
[Get http://localhost:3000/hotel/{hotelid}](http://localhost:3000/hotel/{hotelid})
```json
response
{
    "id": "121312",
    "name": "Raon Danang Beach",
    "address": "Bai bien mi khe, Da Nang",
    "images": ["url0","url1"],
    "description":"Tọa lạc tại thành phố Đà Nẵng, cách Bãi biển Mỹ Khê 400 m và Bãi biển Bắc Mỹ An chưa đầy 1 km, Raon Danang Beach cung cấp chỗ nghỉ với sảnh khách chung và WiFi miễn phí trong toàn bộ khuôn viên cũng...",
    "rooms":[{
                "typeRoom": "Phòng Superior Giường Đôi - Không có Cửa sổ",
                "badroom": ["1 giuong doi lon"],
                "utility": ["ban cong", "asas"],
                "numberOfPeople": 2,
                "price": 1000000,
                "sale": 73,
                "tags": [""],
                "selection": ["Miễn phí hủy đến 18:00 ngày 26 tháng 4 năm 2023","KHÔNG CẦN THANH TOÁN TRƯỚC – thanh toán tại chỗ nghỉ"],

            }],
    "rate": {
        "aggregate": 9.1,
        "totalRate": 1023,
        "" 
    },
    "comments":[{
        "guestAvatar": "url",
        "guestName": "Van Toan",
        "country": "Viet Nam",
        "content": "Phòng sạch sẽ, lễ tân dễ thương và nhiệt tình, dịch vụ rất tốt so với tầm giá"
    }],
    "askAndQuestions":[{
        "ask": "Chào bạn, nếu mình đặt phòng 3 đêm từ 6/2 đến 9/2 cho 4 người thì bên bạn còn chương trình ngâm tắm thảo dược miễn phí không ạ? Tại mình thấy trên ban..",
        "question": "Chào bạn, Đối với những đặt phòng được thực hiện từ sau ngày 27.11.2019 đều được áp dụng chương trình đặt 3 đêm miễn phí 1 lần ngâm tắm thảo dược tại.."
    }],
    "aroundHotel":{
        "around": ["Beach Hotel Park, 200m","My Ke Beach Park, 300m"],
        "coffeeAndRestaurent": ["ROOTS- Plant based Cafe, 120m"],
        "visitLocation": ["a","b"],
        "publicTranport": ["a","b"],
        "airport":["a"]
    },
    "utilitiy":{
        "bestUtility": ["Ho boi trong nha", "wifi mien phi", "xe dua don"],
        "bathRoom": ["giay ve sinh", "khan tam", "xa phong"],
        "badRoom": ["Ra trải giường", "Tủ hoặc phòng để quần áo"],
        "..."
    },
    "generalRule":{
        "checkIn": "14:00, 00:00",
        "checkout": "01:00, 12:00",
        "cancleBooking": "detail",
        "childrent":"...",
        "limitAge": false,
        "pet": false,
        "paymentMethod": ["master card","visa", "money"]
    }
}
```
\
\
Post Hotel
\
-name, address
-