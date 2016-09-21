class CreateIconsJobs < ActiveRecord::Migration
  def change
    create_table :icons_jobs do |t|
      t.references :icon, index: true, foreign_key: true
      t.references :job, index: true, foreign_key: true
    end
  end
end
