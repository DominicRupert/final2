CREATE TABLE IF NOT EXISTS accounts(
  id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
  name varchar(255) COMMENT 'User Name',
  email varchar(255) COMMENT 'User Email',
  picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';


CREATE TABLE IF NOT EXISTS keeps(
    id INT NOT NULL AUTO_INCREMENT primary key,
    creatorId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    img TEXT NOT NULL,
    views INT DEFAULT 0,
    kept INT DEFAULT 0,
    FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
) default charset utf8;

CREATE TABLE IF NOT EXISTS vaults(
    id INT NOT NULL AUTO_INCREMENT primary key,
    creatorId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    isPrivate TINYINT DEFAULT 0,
    FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
) default charset utf8;

CREATE TABLE IF NOT EXISTS vaultkeeps(
    id INT NOT NULL AUTO_INCREMENT primary key,
    creatorId VARCHAR(255) NOT NULL,
    keepId INT NOT NULL,
    vaultId INT NOT NULL,
    FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE,
    FOREIGN KEY (keepId) REFERENCES keeps(id) ON DELETE CASCADE,
    FOREIGN KEY (vaultId) REFERENCES vaults(id) ON DELETE CASCADE
) default charset utf8;
