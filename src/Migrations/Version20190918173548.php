<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190918173548 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE `character` (id INT AUTO_INCREMENT NOT NULL, owner_id INT NOT NULL, name VARCHAR(255) NOT NULL, verified TINYINT(1) NOT NULL, INDEX IDX_937AB0347E3C61F9 (owner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `group` (id INT AUTO_INCREMENT NOT NULL, instance VARCHAR(255) NOT NULL, server VARCHAR(255) NOT NULL, level INT NOT NULL, createdat INT NOT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE group_character (group_id INT NOT NULL, character_id INT NOT NULL, INDEX IDX_53C9ECD5FE54D947 (group_id), INDEX IDX_53C9ECD51136BE75 (character_id), PRIMARY KEY(group_id, character_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, created_at INT NOT NULL, verified TINYINT(1) NOT NULL, password VARCHAR(255) NOT NULL, last_login INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `character` ADD CONSTRAINT FK_937AB0347E3C61F9 FOREIGN KEY (owner_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE group_character ADD CONSTRAINT FK_53C9ECD5FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE group_character ADD CONSTRAINT FK_53C9ECD51136BE75 FOREIGN KEY (character_id) REFERENCES `character` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE group_character DROP FOREIGN KEY FK_53C9ECD51136BE75');
        $this->addSql('ALTER TABLE group_character DROP FOREIGN KEY FK_53C9ECD5FE54D947');
        $this->addSql('ALTER TABLE `character` DROP FOREIGN KEY FK_937AB0347E3C61F9');
        $this->addSql('DROP TABLE `character`');
        $this->addSql('DROP TABLE `group`');
        $this->addSql('DROP TABLE group_character');
        $this->addSql('DROP TABLE user');
    }
}
