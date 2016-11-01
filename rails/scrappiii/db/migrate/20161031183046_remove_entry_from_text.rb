rakclass RemoveEntryFromText < ActiveRecord::Migration
  def change
    remove_reference :texts, :entry, index: true, foreign_key: true
  end
end
