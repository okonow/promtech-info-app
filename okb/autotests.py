import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class PromtechAppTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.maximize_window()
        cls.base_url = "http://127.0.0.1:5500/okbPK.html"
        cls.wait = WebDriverWait(cls.driver, 10)
        cls.test_login = "555-0880"
        cls.test_password = "qwerty12"

    def setUp(self):
        self.driver.get(self.base_url)
        time.sleep(1)

    def test_01_unregistered_user_auth(self):
        """Test Case #1: Авторизация не зарегистрированного в системе пользователя"""
        login_field = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/form/input[1]")))
        password_field = self.driver.find_element(By.XPATH, "/html/body/div/div[1]/div[2]/form/input[2]")
        submit_btn = self.driver.find_element(By.XPATH, "/html/body/div/div[1]/div[2]/form/button")
        
        time.sleep(1)
        login_field.send_keys("invalid_login")
        password_field.send_keys("invalid_password")
        time.sleep(1)
        submit_btn.click()
        
        error_msg = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/form/p")))
        self.assertTrue(error_msg.is_displayed(), "Сообщение об ошибке не отображается")
        time.sleep(2)

    def test_02_registered_user_auth(self):
        """Test Case #2: Авторизация зарегистрированного в системе пользователя"""
        login_field = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/form/input[1]")))
        password_field = self.driver.find_element(By.XPATH, "/html/body/div/div[1]/div[2]/form/input[2]")
        submit_btn = self.driver.find_element(By.XPATH, "/html/body/div/div[1]/div[2]/form/button")
        
        time.sleep(1)
        login_field.send_keys(self.test_login)
        password_field.send_keys(self.test_password)
        time.sleep(1)
        submit_btn.click()
        
        main_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[2]")))
        self.assertTrue(main_screen.is_displayed(), "Главный экран не отображается после авторизации")
        time.sleep(2)

    def test_03_navigate_to_main_screen(self):
        """Test Case #3: Переход к главному экрану"""
        self._perform_login()

        documents_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div/div[1]/nav/button[2]")))
        documents_btn.click()
        time.sleep(2)
        
        main_screen_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div/div[1]/nav/button[1]")))
        main_screen_btn.click()
        time.sleep(2)
        
        main_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[2]")))
        self.assertTrue(main_screen.is_displayed(), "Главный экран не отображается")

    def test_04_navigate_to_documents(self):
        """Test Case #4: Переход к экрану документов"""
        self._perform_login()
        
        documents_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div/div[1]/nav/button[2]")))
        documents_btn.click()
        time.sleep(2)
        
        documents_screen = self.wait.until(EC.presence_of_element_located((By.ID, "docs")))
        self.assertTrue(documents_screen.is_displayed(), "Экран документов не отображается")

    def test_05_navigate_to_notifications(self):
        """Test Case #5: Переход к экрану уведомлений"""
        self._perform_login()
        
        notifications_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[1]/div[2]/button")))
        notifications_btn.click()
        time.sleep(2)
        
        notifications_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div[2]/div[2]")))
        self.assertTrue(notifications_screen.is_displayed(), "Экран уведомлений не отображается")

    def test_06_navigate_to_map(self):
        """Test Case #6: Переход к модулю карты"""
        self._perform_login()
        
        map_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[1]/nav/button[3]")))
        map_btn.click()
        time.sleep(2)
        
        map_screen = self.wait.until(EC.presence_of_element_located((By.ID, "office-map")))
        self.assertTrue(map_screen.is_displayed(), "Экран карты не отображается")
        time.sleep(2)

    def test_07_navigate_to_hr_services(self):
        """Test Case #7: Переход к блоку HR-сервисов"""
        self._perform_login()
        
        hr_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]")))
        hr_btn.click()
        time.sleep(2)

        hr_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[3]")))
        self.assertTrue(hr_screen.is_displayed(), "Экран HR-сервисов не отображается")
        time.sleep(1)

    def test_08_navigate_to_training(self):
        """Test Case #8: Переход к блоку 'Обучение и развитие'"""
        self._perform_login()

        training_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div[2]")))
        training_btn.click()
        time.sleep(2)
        
        training_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[5]")))
        self.assertTrue(training_screen.is_displayed(), "Экран обучения не отображается")
        time.sleep(1)

    def test_9_navigate_to_labor_safety(self):
        """Test Case #9: Переход к блоку 'Охрана труда'"""
        self._perform_login()
        
        safety_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div[3]")))
        safety_btn.click()
        time.sleep(2)

        safety_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[5]")))
        self.assertTrue(safety_screen.is_displayed(), "Экран охраны труда не отображается")
        time.sleep(1)

    def test_10_navigate_to_it_services(self):
        """Test Case #10: Переход к блоку IT"""
        self._perform_login()
        
        it_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div[4]")))
        it_btn.click()
        time.sleep(2)
        
        it_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[5]")))
        self.assertTrue(it_screen.is_displayed(), "Экран IT-сервисов не отображается")
        time.sleep(1)

    def test_11_navigate_to_social_programs(self):
        """Test Case #11: Переход к блоку 'Социальные программы'"""
        self._perform_login()
        
        social_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div[5]")))
        social_btn.click()
        time.sleep(2)

        social_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[5]")))
        self.assertTrue(social_screen.is_displayed(), "Экран социальных программ не отображается")
        time.sleep(1)

    def test_12_navigate_to_sports(self):
        """Test Case #12: Переход к блоку 'Спорт и отдых'"""
        self._perform_login()
        
        sports_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div[6]")))
        sports_btn.click()
        time.sleep(2)
        
        sports_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[4]")))
        self.assertTrue(sports_screen.is_displayed(), "Экран спорта и отдыха не отображается")
        time.sleep(1)

    def test_13_navigate_to_contacts(self):
        """Test Case #13: Переход к экрану справочника контактов"""
        self._perform_login()
        
        contacts_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[1]/nav/button[4]")))
        contacts_btn.click()
        time.sleep(2)
        
        contacts_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[4]")))
        self.assertTrue(contacts_screen.is_displayed(), "Экран контактов не отображается")
        time.sleep(1)

    def test_14_view_contact_details(self):
        """Test Case #14: Просмотр детальной информации о контакте"""
        self._perform_login()
        
        contacts_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[1]/nav/button[4]")))
        contacts_btn.click()
        time.sleep(2)

        contacts_screen = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[4]")))
        self.assertTrue(contacts_screen.is_displayed(), "Экран контактов не отображается")
        
        second_contact = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[4]/div/div[1]/div[2]/div[2]")))
        second_contact.click()
        time.sleep(2)
        
        contact_details = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, "contact-detail-panel")))
        self.assertTrue(contact_details.is_displayed(), "Детали контакта не отображаются")
        time.sleep(1)
        
        name = self.driver.find_element(By.CLASS_NAME, "contact-name").text
        position = self.driver.find_element(By.CLASS_NAME, "contact-position").text
        self.assertNotEqual(name, "", "Имя контакта не заполнено")
        self.assertNotEqual(position, "", "Должность контакта не заполнена")

    def test_15_directory_search(self):
        """Test Case #15: Проверка поиска в справочнике"""
        self._perform_login()
        
        contacts_btn = self.wait.until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[1]/div[1]/nav/button[4]")))
        contacts_btn.click()
        time.sleep(2)
        
        search_field = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div[3]/div[4]/div/div[1]/div[1]/input")))
        search_field.clear()
        search_field.send_keys("Петров")
        time.sleep(2)


    def _perform_login(self):
        self.driver.get(self.base_url)
        login_field = self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[1]/div[2]/form/input[1]")))
        password_field = self.driver.find_element(By.XPATH, "/html/body/div/div[1]/div[2]/form/input[2]")
        submit_btn = self.driver.find_element(By.XPATH, "/html/body/div/div[1]/div[2]/form/button")
        
        time.sleep(1)
        login_field.send_keys(self.test_login)
        password_field.send_keys(self.test_password)
        time.sleep(1)
        submit_btn.click()
        time.sleep(2)
        
        self.wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div/div[2]")))

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

if __name__ == "__main__":
    unittest.main()