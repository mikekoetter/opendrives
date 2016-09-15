class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :job_title
      t.text :job_description
      t.text :job_description_second
      t.string :essentials_title
      t.text :essentials
      t.text :requirements
      t.string :qualities_title
      t.text :qualities

      t.timestamps null: false
    end
  end
end
