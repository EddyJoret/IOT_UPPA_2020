#define OLED
// choose Arduino pin for OLED pin GND, VCC, SCL and SDA 
// suitable for Arduino Nano
//#define OLED_GND234
// suitable for Arduino Nano as well, pin 9 as GND
//#define OLED_9GND876
// suitable for Arduino Uno & Arduino MEGA2560, pin 7 as GND
//#define OLED_7GND654
// suitable for Arduino Uno & Arduino MEGA2560
//#define OLED_GND13_12_11
#define OLED_2GND345

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
#elif defined OLED_2GND345
  #ifdef OLED_PWR_PIN
    #undef OLED_PWR_PIN
    #define OLED_PWR_PIN 3
  #endif  
  U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ 4, /* data=*/ 5, /* reset=*/ U8X8_PIN_NONE);
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

/*
 * --------------------------------------------------------------------------------------------------------------------
 * Example sketch/program showing how to read new NUID from a PICC to serial.
 * --------------------------------------------------------------------------------------------------------------------
 * This is a MFRC522 library example; for further details and other examples see: https://github.com/miguelbalboa/rfid
 * 
 * Example sketch/program showing how to the read data from a PICC (that is: a RFID Tag or Card) using a MFRC522 based RFID
 * Reader on the Arduino SPI interface.
 * 
 * When the Arduino and the MFRC522 module are connected (see the pin layout below), load this sketch into Arduino IDE
 * then verify/compile and upload it. To see the output: use Tools, Serial Monitor of the IDE (hit Ctrl+Shft+M). When
 * you present a PICC (that is: a RFID Tag or Card) at reading distance of the MFRC522 Reader/PCD, the serial output
 * will show the type, and the NUID if a new card has been detected. Note: you may see "Timeout in communication" messages
 * when removing the PICC from reading distance too early.
 * 
 * @license Released into the public domain.
 * 
 * Typical pin layout used:
 * -----------------------------------------------------------------------------------------
 *             MFRC522      Arduino       Arduino   Arduino    Arduino          Arduino
 *             Reader/PCD   Uno/101       Mega      Nano v3    Leonardo/Micro   Pro Micro
 * Signal      Pin          Pin           Pin       Pin        Pin              Pin
 * -----------------------------------------------------------------------------------------
 * RST/Reset   RST          9             5         D9         RESET/ICSP-5     RST
 * SPI SS      SDA(SS)      10            53        D10        10               10
 * SPI MOSI    MOSI         11 / ICSP-4   51        D11        ICSP-4           16
 * SPI MISO    MISO         12 / ICSP-1   50        D12        ICSP-1           14
 * SPI SCK     SCK          13 / ICSP-3   52        D13        ICSP-3           15
 * 
 * When using Arduino Pro Mini, use the pin layout of Arduino Nano
 * When using Heltec ESP32 WiFi LoRa see below
 * modified by C. Pham
 */

//#define ESP32
//#define ARDUINO_Heltec_WIFI_LoRa_32

#include <SPI.h>
#include <MFRC522.h>

#if defined ARDUINO_Heltec_WIFI_LoRa_32 || defined ESP32
#define SS_PIN 5 
#define RFID_SCK 18 
#define RFID_MOSI 23
#define RFID_MISO 19
#define RST_PIN 22
#else
#define RST_PIN         9          // Configurable, see typical pin layout above
#define SS_PIN          10        // Configurable, see typical pin layout above
#endif
 
MFRC522 rfid(SS_PIN, RST_PIN); // Instance of the class

//MFRC522::MIFARE_Key key; 

// Init array that will store new NUID 
byte nuidPICC[4];

char str[16];

void setup() { 
  delay(2000);
  // open serial to print data to serial monitor
  // in serial monitor, set the baud rate to the same defined in the sketch, here 38400
  Serial.begin(38400);
  
#ifdef ARDUINO_Heltec_WIFI_LoRa_32
  SPI.begin(RFID_SCK, RFID_MISO, RFID_MOSI);      // Init SPI bus
#else
  SPI.begin();      // Init SPI bus
#endif

  rfid.PCD_Init(); // Init MFRC522 

#ifdef OLED
#ifdef OLED_PWR_PIN
  pinMode(OLED_PWR_PIN, OUTPUT);
  digitalWrite(OLED_PWR_PIN, HIGH);
#ifdef OLED_2GND345
  //use pin 2 as ground
  pinMode(2, OUTPUT);
  digitalWrite(2, LOW);
#elif OLED_9GND876
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
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  //u8x8.setFont(u8x8_font_pxplustandynewtv_r);
  u8x8.drawString(0, 0, "This code scan");
  u8x8.drawString(0, 1, "the MIFARE");
  u8x8.drawString(0, 2, "Classsic NUID.");
#endif

  Serial.println(F("This code scan the MIFARE Classsic NUID."));
  
  /*
  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }

  Serial.print(F("Using the following key:"));
  printHex(key.keyByte, MFRC522::MF_KEY_SIZE);
  Serial.println();
  */
}
 
void loop() {

  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.
  if ( ! rfid.PICC_IsNewCardPresent())
    return;

  // Verify if the NUID has been readed
  if ( ! rfid.PICC_ReadCardSerial())
    return;

  #ifdef OLED
    u8x8.clearLine(0);
    u8x8.clearLine(1);
    u8x8.clearLine(2);
    u8x8.drawString(0, 0, "PICC type: ");
    Serial.print(F("PICC type: "));
  
    MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
    
    //str = sprintf(rfid.PICC_GetTypeName(piccType));
    //u8x8.drawString(0, 1, str);
    Serial.println(rfid.PICC_GetTypeName(piccType));

    // Check is the PICC of Classic MIFARE type
    if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&  
      piccType != MFRC522::PICC_TYPE_MIFARE_1K &&
      piccType != MFRC522::PICC_TYPE_MIFARE_4K) {
      Serial.println(F("Your tag is not of type MIFARE Classic."));
      return;
    }

    if (rfid.uid.uidByte[0] != nuidPICC[0] || 
      rfid.uid.uidByte[1] != nuidPICC[1] || 
      rfid.uid.uidByte[2] != nuidPICC[2] || 
      rfid.uid.uidByte[3] != nuidPICC[3] ) {
      Serial.println(F("A new card has been detected."));

      // Store NUID into nuidPICC array
      for (byte i = 0; i < 4; i++) {
        nuidPICC[i] = rfid.uid.uidByte[i];
      }

      u8x8.drawString(0, 2, "The NUID tag is:");
      u8x8.drawString(0, 3, "In hex: ");
      for (int i = 0; i < rfid.uid.size; i++) {
        str[i] = rfid.uid.uidByte[i];
        u8x8.drawString(i, 4, str[i] & 0xff);
        Serial.println(str[i] & 0xff);
      }
      u8x8.drawString(0, 5, "In Dec: ");
      for (int i = 0; i < rfid.uid.size; i++) {
        str[i] = rfid.uid.uidByte[i];
        u8x8.drawString(0, 6, str[i] & 0xff);
        Serial.println(str[i] & 0xff);
      }
      
      Serial.println(F("The NUID tag is:"));
      Serial.print(F("In hex: "));
      printHex(rfid.uid.uidByte, rfid.uid.size);
      Serial.println();
      Serial.print(F("In dec: "));
      printDec(rfid.uid.uidByte, rfid.uid.size);
      Serial.println();
    }else
    u8x8.clearLine(0);
    u8x8.clearLine(1);
    u8x8.clearLine(2);
    u8x8.clearLine(3);
    u8x8.clearLine(4);
    u8x8.clearLine(5);
    u8x8.clearLine(6);
    u8x8.clearLine(7);
    u8x8.drawString(0, 0, "Card read");
    u8x8.drawString(0, 1, "previously.");
    Serial.println(F("Card read previously."));

    // Halt PICC
    rfid.PICC_HaltA();

    // Stop encryption on PCD
    rfid.PCD_StopCrypto1();
  #endif
}


/**
 * Helper routine to dump a byte array as hex values to Serial. 
 */
void printHex(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], HEX);
  }
}

/**
 * Helper routine to dump a byte array as dec values to Serial.
 */
void printDec(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], DEC);
  }
}
