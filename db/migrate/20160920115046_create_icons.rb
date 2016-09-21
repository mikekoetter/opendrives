class CreateIcons < ActiveRecord::Migration
  def change
    create_table :icons do |t|

      t.timestamps null: false
    end
  end
end
