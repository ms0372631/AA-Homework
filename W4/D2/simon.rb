class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @gave_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end
    if game_over
      game_over
      game_over_message
    end
  end

  def take_turn
    show_sequence
    require_sequence
    if !game_over
      round_success_message
      add_random_color
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence

  end

  def add_random_color
    @sequence_length = 1
  end

  def round_success_message
    puts "this round is executed successfully"
  end

  def game_over_message
    puts "the game is over"
  end

  def reset_game
    @sequence_length = 1
    game_over = false
    seq = []
  end
end
