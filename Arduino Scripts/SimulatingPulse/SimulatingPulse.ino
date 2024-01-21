void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int testPulse=random(60, 120);
  Serial.println(testPulse);
  delay(5000);

}
