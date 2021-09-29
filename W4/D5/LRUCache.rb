class LRUCache

    attr_reader :max_size, :array

    def initialize(n)
        @max_size = n
        @array = []
    end

    def count
      # returns number of elements currently in cache
      array.length
    end

    def add(el)
      # adds element to cache according to LRU principle
      idx = array.find_index(el)
      if idx.nil?
        array.unshift if count == max_size 
        array << el
      else 
        array.delete_at(idx)
        array << ele
    end

    def show
      # shows the items in the cache, with the LRU item first
      prints "#{array}"
    end

    private
    # helper methods go here!
    
  end