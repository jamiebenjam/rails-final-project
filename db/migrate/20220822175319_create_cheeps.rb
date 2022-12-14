class CreateCheeps < ActiveRecord::Migration[6.1]
  def change
    create_table :cheeps do |t|
      t.text :cheep
      t.integer :likers_count, :default => 0
      t.references :user, null: false, foreign_key: true

      t.timestamps
      a = Time.now
      a.strftime("Cheeped on %m/%d/%Y")
    end
  end
end
