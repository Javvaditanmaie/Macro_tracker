### End-to-End Backend Plan: Macro Tracker 

#### 1. REGISTER
## Endpoint:
POST http://localhost:5000/api/auth/register
<pre>{
  "name": "Tanmaie",
  "email": "tanmaie@example.com",
  "password": "test1234"
}
</pre>

![Screenshot 2025-07-06 142943](https://github.com/user-attachments/assets/0b1afeec-f087-4765-b1d3-1f3cb7fd81c1)

### 2. LOGIN
Endpoint:
POST http://localhost:5000/api/auth/login
<pre>
  {
  "email": "tanmaie@example.com",
  "password": "test1234"
}

</pre>
![Screenshot 2025-07-06 145515](https://github.com/user-attachments/assets/da66514e-9208-4409-b600-80901e22b865)

### 3. GET PROFILE
Endpoint:
GET http://localhost:5000/api/profile
<pre>
  Authorization: Bearer <your-jwt-token>
</pre>

![Screenshot 2025-07-06 145644](https://github.com/user-attachments/assets/01d4eebc-110c-4cfb-b0de-046b2a7f8657)

### 4. UPDATE PROFILE
 Endpoint:
PUT http://localhost:5000/api/profile
BODY
<pre>
  {
  "target_calories": 2200,
  "target_protein": 160,
  "target_carbs": 250,
  "target_fat": 80,
  "target_water": 3100
}
</pre>

![Screenshot 2025-07-06 145739](https://github.com/user-attachments/assets/833cfce1-ebfa-43da-aab5-7a3ddc829095)
### 5. SEARCH FOODS
Endpoint:
GET http://localhost:5000/api/foods?search=chicken

![Screenshot 2025-07-06 155833](https://github.com/user-attachments/assets/42392bd4-6c87-48a7-b6dd-eda298209683)

### 6. LOG FOOD ENTRY
Endpoint:
POST http://localhost:5000/api/diary
<pre>
  {
  "food": "<food-id-from-search>",
  "quantity": 2,
  "meal_type": "Lunch",
  "log_date": "2025-07-06"
}
</pre>

![Screenshot 2025-07-06 160354](https://github.com/user-attachments/assets/666906b5-c0fe-4567-a20e-86e91c8f177f)
### 7. LOG water entry
Endpoint:
post http://localhost:5000/api/water
<pre>
  "quantity_ml":500,
  "log_date":"2025-07-06"
</pre>
![Screenshot 2025-07-06 160523](https://github.com/user-attachments/assets/34dfa4bd-93d8-43aa-b05a-aadbaf7ccff3)
### 8.log weight entry
endpoint:
post http://localhost:5000/api/weight
<pre>
  "weight_kg":65,
  "log_date":"2025-07-06"
</pre>
![Screenshot 2025-07-06 160614](https://github.com/user-attachments/assets/f5781549-8961-48fc-9af3-37436baac17e)

### 9 GET DASHBOARD
Endpoint:
GET http://localhost:5000/api/dashboard?date=2025-07-06

![Screenshot 2025-07-06 160700](https://github.com/user-attachments/assets/c5686aa6-2368-404b-8d3f-300ff0136287)
### 10 Open AI API(gemini API)
POST http://localhost:5000/api/suggest-meal
Body
<pre>
  {
  "remainingProtein": 30,
  "remainingCarbs": 50,
  "remainingFat": 20
}
</pre>
![image](https://github.com/user-attachments/assets/f84275f2-b482-4b39-885a-bbce91faf5f4)
