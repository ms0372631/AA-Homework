require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  let(:cake) { Dessert.new("cake", 50, chef)}

  describe "#initialize" do
    it "sets a type"
      expect(cake.type).to be("cake")
    it "sets a quantity"
      expect(cake.quanity).to be(50)
    it "starts ingredients as an empty array"
      expect(cake.ingredients).to be([])
    it "raises an argument error when given a non-integer quantity"
      expect { !cake.quanity.is_a?(Array) }.to raise_error(ArgumentError)

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array"
      expect(cake.ingredients.include?(ingredient)). to be true
  end

  describe "#mix!" do
    it "shuffles the ingredient array"
      expect(mix!).to be
  end

  describe "#eat" do
    it "subtracts an amount from the quantity"
      expect(@quanity).to eq(@quanity - amount) 

    it "raises an error if the amount is greater than the quantity"
    expect{ amount > @quanity }.to raise_error("amount cannot be greater than quanity")
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name"
      expect(serve). to include("#{@chef.titleize}")
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
      expect(chef).to recieve(:bake).with(cake)
      brownie.make_more
  end
end
