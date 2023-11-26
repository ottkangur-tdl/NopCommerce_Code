Feature: NopCommerce page

  Scenario Outline: Register user

    Given User is on NopCommerce main page
    And User opens Register page
    When User fills in the registration fields
    Then User successfully reigisters