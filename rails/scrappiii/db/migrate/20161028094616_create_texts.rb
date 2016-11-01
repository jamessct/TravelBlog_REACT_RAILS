class CreateTexts < ActiveRecord::Migration
  def change
    create_table :texts do |t|
      t.string :body
      t.string :comments

      t.timestamps null: false
    end
  end
end
