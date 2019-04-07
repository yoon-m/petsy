class Product < ApplicationRecord
    validates :owner_id, :price, :description, :title, presence: true
    validates :title, uniqueness: { scope: :owner_id }

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem

    has_many_attached :pictures
end