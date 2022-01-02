create table Users(
    id INT PRIMARY KEY OAUT_INCREMENT, --Primary key: column identifies unique row & checks to make sure value is unique and not null (extra layer of data validation)
    email VARCHAR (255) NOT NULL,
    bio TEXT,
    country VARCHAR(2)
); 