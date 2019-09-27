<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190927192411 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE group_character DROP FOREIGN KEY FK_53C9ECD5FE54D947');
        $this->addSql('DROP TABLE `group`');
        $this->addSql('DROP TABLE group_character');
        $this->addSql('ALTER TABLE user ADD roles JSON NOT NULL, DROP created_at, DROP verified, DROP last_login, CHANGE email email VARCHAR(180) NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE `group` (id INT AUTO_INCREMENT NOT NULL, instance VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, server VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, level INT NOT NULL, createdat INT NOT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE group_character (group_id INT NOT NULL, character_id INT NOT NULL, INDEX IDX_53C9ECD5FE54D947 (group_id), INDEX IDX_53C9ECD51136BE75 (character_id), PRIMARY KEY(group_id, character_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE group_character ADD CONSTRAINT FK_53C9ECD51136BE75 FOREIGN KEY (character_id) REFERENCES `character` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE group_character ADD CONSTRAINT FK_53C9ECD5FE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
        $this->addSql('ALTER TABLE user ADD created_at INT NOT NULL, ADD verified TINYINT(1) NOT NULL, ADD last_login INT NOT NULL, DROP roles, CHANGE email email VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
