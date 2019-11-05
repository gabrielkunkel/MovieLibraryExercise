namespace WebAPISample.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class imagesUrladded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movies", "ImageUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movies", "ImageUrl");
        }
    }
}
