class RemoveTextidFromComment < ActiveRecord::Migration
  def change
    remove_reference :comments, :text, index: true, foreign_key: true
  end
end
