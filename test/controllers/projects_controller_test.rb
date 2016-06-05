require 'test_helper'

class ProjectsControllerTest < ActionController::TestCase
  test "should get friends" do
    get :friends
    assert_response :success
  end

  test "should get ecommerce" do
    get :ecommerce
    assert_response :success
  end

end
