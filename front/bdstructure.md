# Database Structure Documentation

## Models Overview

## User

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|first_name|STRING|User's first name|-|
|corporate_login|STRING|Corporate login|Not Null, Unique|
|last_name|STRING|User's last name|-|
|middle_name|STRING|User's middle name|-|
|email|STRING|User's email|-|
|password|STRING|User's password|-|
|phone_number|STRING|User's phone number|-|
|birthday|DATE|User's birthday|-|
|role|ENUM|User's role|Values: 'admin', 'user', Default: 'user'|
|position_id|UUID|Foreign key to Position|References positions.id|
|department_id|UUID|Foreign key to Department|References departments.id|
|refresh_token|STRING|Refresh token for auth|-|
|created_at|TIMESTAMP|Creation timestamp|Auto-generated|
|updated_at|TIMESTAMP|Update timestamp|Auto-generated|

**Relationships:**

- Belongs to Department
    
- Belongs to Position
    
- Has many News (as author)
    
- Has many Notifications
    
- Has many Documents (as uploader)
    

## Company

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|name|STRING|Company name|-|
|description|TEXT|Company description|-|
|address|STRING|Company address|-|

**Relationships:**

- Has many Departments
    
- Has many News
    
- Has many Users (through Departments)
    

## Department

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|name|STRING|Department name|-|
|description|TEXT|Department description|-|
|company_id|UUID|Foreign key to Company|References companies.id|

**Relationships:**

- Belongs to Company
    
- Has many Users
    

## Position

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|name|STRING|Position name|-|
|description|TEXT|Position description|-|

**Relationships:**

- Has many Users
    

## News

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|title|STRING|News title|-|
|content|TEXT|News content|-|
|author_id|UUID|Foreign key to User|References users.id|
|company_id|UUID|Foreign key to Company|References companies.id|
|created_at|TIMESTAMP|Creation timestamp|Auto-generated|
|updated_at|TIMESTAMP|Update timestamp|Auto-generated|

**Relationships:**

- Belongs to User (as author)
    
- Belongs to Company
    

## Notification

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|title|STRING|Notification title|-|
|message|TEXT|Notification message|-|
|read|BOOLEAN|Read status|Default: false|
|user_id|UUID|Foreign key to User|References users.id|
|created_at|TIMESTAMP|Creation timestamp|Auto-generated|
|updated_at|TIMESTAMP|Update timestamp|Auto-generated|

**Relationships:**

- Belongs to User
    

## Document

|Field|Type|Description|Constraints|
|---|---|---|---|
|id|UUID|Primary key|Primary Key, Default: uuidv4()|
|title|STRING|Document title|-|
|description|TEXT|Document description|-|
|fileUrl|STRING|Document file URL|-|
|category|STRING|Document category|-|
|status|ENUM|Document status|Values: 'draft', 'pending', 'approved', 'rejected', Default: 'draft'|
|uploader_id|UUID|Foreign key to User|References users.id|
|created_at|TIMESTAMP|Creation timestamp|Auto-generated|
|updated_at|TIMESTAMP|Update timestamp|Auto-generated|

**Relationships:**

- Belongs to User (as uploader)
    

> Для корректного отображения таблиц в Obsidian используйте именно такой синтаксис: строки без пустых строк между ними, вертикальные черты и строка с дефисами после заголовков[7](https://www.wundertech.net/obsidian-tables/)[8](https://glasp.co/youtube/p/every-useful-markdown-syntax-that-i-use-in-obsidian).  
> Если потребуется расширенный функционал (например, объединение ячеек), рассмотрите плагины, такие как Advanced Tables или Table Extended[5](https://github.com/aidenlx/table-extended)[8](https://glasp.co/youtube/p/every-useful-markdown-syntax-that-i-use-in-obsidian).

Остальной текст и диаграммы (например, Mermaid) можно оставить без изменений.

### Citations:

1. [https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax)
2. [https://help.obsidian.md/syntax](https://help.obsidian.md/syntax)
3. [https://forum.obsidian.md/t/can-we-support-basic-formatting-syntax-in-table-cell/78969](https://forum.obsidian.md/t/can-we-support-basic-formatting-syntax-in-table-cell/78969)
4. [https://www.reddit.com/r/ObsidianMD/comments/11ma41d/tables_in_obsidian/](https://www.reddit.com/r/ObsidianMD/comments/11ma41d/tables_in_obsidian/)
5. [https://github.com/aidenlx/table-extended](https://github.com/aidenlx/table-extended)
6. [https://www.youtube.com/watch?v=ONDisTn1ICw](https://www.youtube.com/watch?v=ONDisTn1ICw)
7. [https://www.wundertech.net/obsidian-tables/](https://www.wundertech.net/obsidian-tables/)
8. [https://glasp.co/youtube/p/every-useful-markdown-syntax-that-i-use-in-obsidian](https://glasp.co/youtube/p/every-useful-markdown-syntax-that-i-use-in-obsidian)
9. [https://www.reddit.com/r/ObsidianMD/comments/1k260yk/presumably_a_stupid_question_about_tables/](https://www.reddit.com/r/ObsidianMD/comments/1k260yk/presumably_a_stupid_question_about_tables/)

---

Answer from Perplexity: [pplx.ai/share](https://www.perplexity.ai/search/pplx.ai/share)