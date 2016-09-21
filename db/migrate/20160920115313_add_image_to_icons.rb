class AddImageToIcons < ActiveRecord::Migration
  def self.up
    add_attachment :icons, :image
  end

  def self.down
    remove_attachment :icons, :image
  end
end
