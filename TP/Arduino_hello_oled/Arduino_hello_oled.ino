#define OLED
// choose Arduino pin for OLED pin GND, VCC, SCL and SDA 
// suitable for Arduino Nano
//#define OLED_GND234
// suitable for Arduino Nano as well, pin 9 as GND
//#define OLED_9GND876
// suitable for Arduino Uno & Arduino MEGA2560, pin 7 as GND
#define OLED_7GND654
// suitable for Arduino Uno & Arduino MEGA2560
//#define OLED_GND13_12_11

// if you know you have an ESP8266 based board, uncomment next line
//#define ESP8266

// if you know you have an Heltec WiFi LoRa based board, uncomment next 
//#define ARDUINO_Heltec_WIFI_LoRa_32

#ifdef OLED
#include <U8x8lib.h>
//you can also power the OLED screen with a digital pin, here pin 8
#define OLED_PWR_PIN 8
// connection may depend on the board. Use A5/A4 for most Arduino boards. On ESP8266-based board we use GPI05 and GPI04. Heltec ESP32 has embedded OLED.
#if defined ARDUINO_Heltec_WIFI_LoRa_32 || defined ARDUINO_WIFI_LoRa_32 || defined HELTEC_LORA
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 15, /* data=*/ 4, /* reset=*/ 16);
#elif defined ESP8266 || defined ARDUINO_ESP8266_ESP01
//U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);
U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 12, /* data=*/ 14, /* reset=*/ U8X8_PIN_NONE);
#else
#ifdef OLED_GND234
  #ifdef OLED_PWR_PIN
    #undef OLED_PWR_PIN
    #define OLED_PWR_PIN 2
  #endif
  U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 3, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);
#elif defined OLED_9GND876
  #ifdef OLED_PWR_PIN
    #undef OLED_PWR_PIN
    #define OLED_PWR_PIN 8
  #endif  
  U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 7, /* data=*/ 6, /* reset=*/ U8X8_PIN_NONE);
#elif defined OLED_7GND654
  #ifdef OLED_PWR_PIN
    #undef OLED_PWR_PIN
    #define OLED_PWR_PIN 6
  #endif  
  U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 5, /* data=*/ 4, /* reset=*/ U8X8_PIN_NONE);  
#elif defined OLED_GND13_12_11
  #ifdef OLED_PWR_PIN
    #undef OLED_PWR_PIN
    #define OLED_PWR_PIN 13
  #endif  
  U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 12, /* data=*/ 11, /* reset=*/ U8X8_PIN_NONE); 
#else
  U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ A5, /* data=*/ A4, /* reset=*/ U8X8_PIN_NONE);
#endif
#endif
char oled_msg[20];
#endif

int i=1;

// put your setup code here, to run once:
void setup() {

  delay(2000);
  // open serial to print data to serial monitor
  // in serial monitor, set the baud rate to the same defined in the sketch, here 38400
  Serial.begin(38400);

#ifdef OLED
#ifdef OLED_PWR_PIN
  pinMode(OLED_PWR_PIN, OUTPUT);
  digitalWrite(OLED_PWR_PIN, HIGH);
#ifdef OLED_9GND876
  //use pin 9 as ground
  pinMode(9, OUTPUT);
  digitalWrite(9, LOW);
#elif defined OLED_7GND654
  //use pin 7 as ground
  pinMode(7, OUTPUT);
  digitalWrite(9, LOW);
#endif  
#endif
  u8x8.begin();
  //u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setFont(u8x8_font_pxplustandynewtv_r);
  u8x8.drawString(0, 0, "Hello friend");
  u8x8.drawString(0, 1, "How are you?");
#endif

  Serial.println("Hello friend");
}

void loop() {
  delay(500);

  if (i==10) {
    Serial.println("Please answer me my friend...");
    i=1;
  }
  else
    i++;
    
  // put your main code here, to run repeatedly:
  Serial.println("What can I do for you...?");
  
#ifdef OLED
  u8x8.drawString(0, 2, "What can I do   ");
  u8x8.drawString(0, 3, "for you         ");
  u8x8.drawString(0, 4, "today ?         ");
#endif 

  delay(1000);

#ifdef OLED
  u8x8.clearLine(2);
  u8x8.drawString(0, 2, "****************");
  u8x8.drawString(0, 3, "++++++++++++++++");
  u8x8.clearLine(4);
  u8x8.drawString(0, 5, "////////////////");
  u8x8.drawString(0, 6, "----------------");
  u8x8.drawString(0, 7, "////////////////");
#endif   

  delay(1000);
}
