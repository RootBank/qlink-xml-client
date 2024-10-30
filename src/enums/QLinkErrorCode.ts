export enum QLinkStatusCode {
  'Ok' = 0,
  'Error code out of range' = 100,
  'Process comments logged' = 101,
  'Command line parameters error' = 102,
  'Transaction type invalid' = 1001,
  'Transaction barred' = 1002,
  'Transaction similar to this one is pending' = 1003,
  'No change effected by transaction' = 1004,
  'Consolidation not reserved' = 1005,
  'Consolidation already exists' = 1006,
  'Consolidation expired/cancelled' = 1007,
  'Exact duplicate transaction' = 1008,
  'Rejection prior deletion' = 1020,
  'Rejection transaction in progress' = 1021,
  'Rejection prior add' = 1022,
  'Rejection prior fix' = 1023,
  'Future dated transaction now active' = 1024,
  'Deletion of transaction not yet active' = 1025,
  'Duplicate reservation' = 1026,
  'Transaction rejected by a later transaction' = 1027,
  'Reference number already reserved' = 1028,
  'Reservation does not exist' = 1029,
  'Reservation expired' = 1030,
  'Invalid deduction code, reference no. or institution code' = 1031,
  'Consolidation number not allowed for this transaction' = 1032,
  'Transaction being processed, QFIX not allowed' = 1033,
  'QFIX being processed, transaction not allowed' = 1034,
  'No notification' = 1035,
  'Number of payroll entries exceed 34' = 1036,
  'Non-matched already resolved' = 1037,
  'Reservation may only be extended once' = 1038,
  'Reservation number compulsory' = 1039,
  'QREP being processed, no transactions allowed' = 1040,
  'QOPT being processed, transaction not allowed' = 1041,
  'Transaction canceled by cancellation of notification' = 1042,
  'Transaction rejected during conversion' = 1043,
  'IP address not registered' = 1051,
  'Maximum daily online enquiries exceeded' = 1052,
  'Insufficient interval between online transactions' = 1053,
  'Maximum daily online enquiries per contact exceeded' = 1054,
  'Service currently unavailable' = 1055,
  'Only one transaction per run allowed' = 1056,
  'Transaction date before inception date ' = 1057,
  'Maximum affordability enquiries for employee exceeded ' = 1058,
  'QADD being processed, transaction not allowed' = 1059,
  'Document unlinked' = 1065,
  'Maximum daily affordability enquiries per employee exceeded' = 1070,
  'Maximum affordability enquiries for employee exceeded' = 1071,
  'Maximum reservation trx for employee exceeded' = 1072,
  'One affordability per employee per batch file allowed' = 1073,
  'QADD not allowed 2 days prior to cut off' = 1074,
  'Only QREP allowed where reference: NOT_MATCHED' = 1075,
  'Employee number invalid' = 2001,
  'Employee number not listed' = 2002,
  'Employees service terminated' = 2003,
  'Employee does not qualify' = 2004,
  'Employee has been transferred' = 2005,
  'Surname compulsory' = 2006,
  'Initials compulsory' = 2007,
  'ID number compulsory' = 2008,
  'ID number invalid' = 2009,
  'Employee under admin' = 2010,
  'Garnishee against employee' = 2011,
  'Tentative Off-strength' = 2012,
  'Appointment code compulsory' = 2013,
  'Salary frozen' = 2014,
  'Appointment code invalid' = 2015,
  'Employee not a union member' = 2016,
  'Employees salary insufficient' = 2017,
  'Old Employee number does not exist' = 2018,
  'Old Employee number compulsory' = 2019,
  'Employee Inactive' = 2020,
  'Invalid RSA ID number' = 2021,
  'Resignation letter from employee outstanding' = 2022,
  'Transaction already pending' = 2023,
  'New deduction received from more than one union' = 2024,
  'Employee is already a member of another union' = 2025,
  'Employee may not belong to this union' = 2026,
  'Employee inactive at transaction date' = 2027,
  'ID Number not found' = 2028,
  'Surname not found' = 2029,
  'Invalid ID number/Surname combination' = 2030,
  'Employee may not belong to this medical fund' = 2031,
  'PSAP members may not belong to a Military union' = 2032,
  'Military members may not belong to a PSAP union' = 2033,
  'Employee does not qualify for subsidy' = 2034,
  'Employee belongs to department Co/Do - no deduction allowed' = 2035,
  'Employee qualifies for subsidy' = 2036,
  'Invalid ID number/Date of Birth/Employee number combination' = 2037,
  'Transport record does not exist' = 2038,
  'Control record does not exist' = 2039,
  'Vehicle insurance exceeds R10 192.00' = 2040,
  'Incorrect maintenance service provider for registration' = 2041,
  'IDNO match to more than one employee' = 2042,
  'ID Number OR Passport number must be populated' = 2043,
  'Invalid Initials' = 2044,
  'Employee / Beneficiary deceased' = 2045,
  'Invalid Grant Beneficiary' = 2046,
  'Grant has been converted to a non-deduction grant type' = 2047,
  'Grant has been suspended' = 2048,
  'Grant has been terminated' = 2049,
  'SASSA Prescribed Mandate cancelled' = 2050,
  'Invalid grant status' = 2051,
  'ID number changed' = 2052,
  'Invalid reference number' = 3001,
  'New reference number compulsory' = 3003,
  'New reference number already exists' = 3004,
  'Reference number already exists' = 3005,
  'References are not the same' = 3006,
  'Branch code compulsory ' = 3007,
  'Reservation already exists without a reference number' = 3008,
  'Reference_no / New Reference_no too long' = 3009,
  'Invalid retirement annuity clearance number' = 3010,
  'Invalid Branch Code' = 3011,
  'Type of order compulsory' = 3012,
  'Court number compulsory' = 3013,
  'Case number compulsory' = 3014,
  'Account failed check digit verification' = 3015,
  'Account type failed check digit verification' = 3016,
  'Bank Check Validation Failed' = 3017,
  'Collection method invalid' = 3018,
  'Naedo not active for the institution' = 3019,
  'Invalid branch code for the service type' = 3020,
  'Invalid account number' = 3021,
  'Branch code compulsory for Transaction type' = 3022,
  'Institution not registered for voice recording' = 3023,
  'Vehicle categories differ from transport record' = 3024,
  'Transport record does not exist for fuel claim dates and ref' = 3025,
  'Record does not exist with this reference' = 3026,
  'Admission to the scheme not adviced' = 3027,
  'Invalid Double debit indicator' = 3028,
  'Invalid non payment action' = 3029,
  'CDV exception rule does not exist' = 3035,
  'CDV branch does not belong to bank' = 3036,
  'CDV invalid weight' = 3037,
  'QUPD invalid for medical option plan change' = 3040,
  'Amount compulsory' = 4001,
  'Amount < Minimum' = 4002,
  'Amount > Maximum' = 4003,
  'Amount > Balance' = 4004,
  'Amount and percentage zero' = 4005,
  'Amount must change if the date is changed' = 4006,
  'Balance compulsory' = 4007,
  'Loan amount compulsory' = 4008,
  'Amount or balance must change' = 4009,
  'Settlement amount probably incorrect' = 4010,
  'Amount may only decrease' = 4011,
  'Amount may only increase' = 4012,
  'Balance must decrease' = 4013,
  'Amount may only be a quarter or less than balance' = 4014,
  'Amount may not change' = 4015,
  'Invalid increase in balance' = 4016,
  'Balance must be zero' = 4017,
  'Exceed premium increase limit of R10 or 15%' = 4018,
  'Hundred percent bond compulsory' = 4019,
  'Hundred percent bond must be 0 or 1' = 4020,
  'Capital and interest compulsory' = 4021,
  'Interest rate compulsory' = 4022,
  'Fixed interest compulsory' = 4023,
  'Fixed interest must be 0 or 1' = 4024,
  'Amount must change' = 4025,
  'Balance exceeds balance on history' = 4026,
  'Amt may not exceed max % limit of employee med contribution' = 4027,
  'Interest payable compulsory' = 4028,
  'Administrative costs compulsory' = 4029,
  'Credit insurance compulsory' = 4030,
  'Other costs compulsory' = 4031,
  'Invalid increase in amount' = 4032,
  'Installment amount equal 0. Submit QRAM transaction' = 4033,
  'Instated with percentage, amend with percentage' = 4034,
  'Balance > Maximum' = 4035,
  'Amount not equal Interest + additional payments' = 4037,
  'Amount exceeds percentage permitted' = 4038,
  'Amount invalid' = 4039,
  'Payroll limit exceeded' = 4040,
  'Primary debt compulsory' = 4041,
  'Judgement debt compulsory' = 4042,
  'Account type compulsory' = 4043,
  'Branch code compulsory' = 4044,
  'Account number compulsory' = 4045,
  'Frequency compulsory' = 4046,
  'Invalid tracking indicator' = 4047,
  'Invalid movement indicator' = 4048,
  'Percentage may not be advised for this institution' = 4049,
  'Must be a once-off deduction if balance <= amount' = 4050,
  'Capital and additional payment not equal to amount' = 4051,
  'Capital remuneration compulsory' = 4052,
  'Fuel allowance compulsory' = 4055,
  'Capital Remuneration > Capital, Interest + Add payment' = 4056,
  'Variable Action Day Compulsory N or Y' = 4058,
  'Invalid voice recording option' = 4059,
  'Maintenance allowance exceeds the authorized amount' = 4060,
  'Allowance may not be more than deduction' = 4061,
  'Fuel allowance already exists for this period' = 4062,
  'Mandate flag compulsory' = 4063,
  'Loan amount differs from Transport record' = 4065,
  'SubTransport Maintenance CapitalRenumeration must be zero' = 4066,
  'Invalid amount for deduction' = 4067,
  'Invalid mandate flag option' = 4068,
  'Percentage not allowed' = 4071,
  'Instated with amount, update with amount' = 4072,
  'Aedo Number of installments is 0' = 4073,
  'Aedo Installent number is 0' = 4074,
  'Invalid Aedo Update' = 4075,
  'Invalid Aedo Suspend Remove' = 4076,
  'Aedo not in tracking' = 4077,
  'Aedo Day of week compulsory' = 4078,
  'Amount includes arrear amount' = 4079,
  'Amount increased without a valid Mandate' = 4080,
  'Grant not collected' = 4081,
  'Grant not collected for three months' = 4083,
  'Start date invalid' = 5001,
  'Start Date > End Date' = 5002,
  'Start date and end date in the same month' = 5003,
  'Start date in the past' = 5004,
  'End date invalid' = 5005,
  'End date in the past' = 5006,
  'Start date in the future' = 5007,
  'End date in the future' = 5008,
  'Policy Mandate is older than 6 months' = 5009,
  'Start date compulsory' = 5010,
  'End date compulsory' = 5011,
  'Registration date compulsory' = 5012,
  'Term compulsory' = 5013,
  'Transaction too far in the future' = 5014,
  'Start date too early for notice period' = 5015,
  'Transaction too far in the past' = 5016,
  'Registration date incorrect   ' = 5017,
  'End date may not be more than 1 day less than start date' = 5018,
  'Start date is before appointment date' = 5019,
  'Start date may not be before previous end date' = 5020,
  'End-date different from payroll records' = 5021,
  'Incorrect birthdate and employee number combination' = 5022,
  'End date not allowed' = 5023,
  'Court date compulsory' = 5024,
  'Lodgement date compulsory' = 5025,
  'Court date invalid' = 5026,
  'Lodgement date invalid' = 5027,
  'Action day compulsory' = 5028,
  'Action Date for Once-Off in the past' = 5029,
  'Expiry date compulsory' = 5030,
  'Expiry date in the past' = 5031,
  'Expiry date invalid' = 5032,
  'Payment term may not be greater than 50 months' = 5033,
  'Invalid term' = 5034,
  'Term calculated from registration date to end date > 50' = 5035,
  'Payment term may not be greater than 48 months.' = 5036,
  'Transaction start date < transport record submission date' = 5037,
  'Fuel allowance date > 2 months after endate' = 5038,
  'Period is after enddate of subsidised motor transport' = 5039,
  'START DATE < TRANSPORT RECORD REGISTRATION' = 5040,
  'Term from start date to end date < 32' = 5041,
  'Term calculated from registration date to end date < 32' = 5042,
  'Term calculated from start date to end date > 50' = 5043,
  'WEF date before employment date' = 5045,
  'Transaction past action_date - only effective next month' = 5060,
  'Invalid registration date' = 5061,
  'Term (balance divided by amount) is greater than 999' = 5064,
  'Policy inception date is invalid' = 5065,
  'Policy inception date does not match SASSA mandate' = 5066,
  'Invalid deduction type' = 6000,
  'Deduction already exists' = 6001,
  'Deduction not found' = 6002,
  'Deduction cancelled by dept. Dept must reinstate' = 6003,
  'Deduction cancelled' = 6004,
  'Deduction type compulsory' = 6005,
  'Deduction not allowed at this bureau' = 6006,
  'New deduction type compulsory' = 6007,
  'Deduction limitation period has not expired' = 6008,
  'Deduction blocked by the department' = 6009,
  'Manual intervention at payroll' = 6010,
  'Deduction blocked by payroll' = 6011,
  'Only one deduction allowed' = 6012,
  'Maximum Number of Deductions per Inst. Type Exceeded' = 6013,
  'Sub Transport deduction does not exist on Payroll' = 6014,
  'Maximum number of deductions exceeded' = 6015,
  'Similar deduction already exist' = 6016,
  'Recurring allowance already exist' = 6017,
  'Employee may only belong to one military union' = 6020,
  'Supporting Policy Mandate outstanding, insurer to submit' = 6021,
  'QREP is required to correct NOT MATCHED transaction' = 6022,
  'Audit on Policy Mandate failed' = 6023,
  'Audit on Policy Mandate pending' = 6024,
  'QADD not allowed, Financial deduction does not exists' = 6025,
  'QUPD start date before start date of last QUPD' = 6026,
  'Prescribed SASSA Mandate outstanding' = 6027,
  'Warning, grant not collected - Technical reasons' = 6028,
  'Arrear amount exceed more than 6 months deduction premuims' = 6029,
  'Record not on settlement fall-off table' = 6500,
  'Deduction under consolidation' = 6501,
  'No previous deduction history' = 6502,
  'Non-matched deduction not found' = 6503,
  'Deduction not realized on payroll' = 6504,
  'Deduction exists, but with different deduction type' = 6505,
  'Deduction not yet active' = 6507,
  'Existing structured allowance prevents QADD' = 6508,
  'Department differs from current Department' = 6509,
  'Installment already presented for payment' = 6510,
  'Unmatched Legal Transaction Record' = 6511,
  'Legal Transaction Record Terminated' = 6512,
  'Invalid EAO Status Update' = 6513,
  'Invalid EAO Status Reason' = 6514,
  'Invalid EAO Audit Status ' = 6515,
  'Invalid EAO Audit Reason' = 6516,
  'Beneficiary code does not exist' = 6518,
  'Deductions exceed maximum percentage limit' = 7001,
  'Take home pay < minimum allowed' = 7002,
  'Consolidation must improve net with at least 10%' = 7003,
  'Interest rate too high' = 7004,
  'General error in affordability' = 7005,
  'No salary amount available for employee' = 7006,
  'Salary negative for maintenance orders' = 7007,
  'Invalid deduction period' = 7009,
  'Deduction failed repricing interest rate' = 7010,
  'Consolidation maximum period invalid' = 7011,
  'Deduction already reserved' = 7012,
  'Duplicate transaction rejected by service provider' = 7013,
  'Affordability rejection by the payroll' = 7015,
  'Inflation increase > 15% forces Distress' = 7016,
  'Affordability failed:  Cannot recover arrears' = 7017,
  'Deduction exceed max perc:  There is an existing reservation' = 7018,
  'Take home pay < min allowed: There is an existing reservation' = 7019,
  'Not provided for (equivalent to R/D on a cheque)' = 7100,
  'Debits not allowed to this account' = 7101,
  'Payment stopped (by account holder)' = 7102,
  'Account frozen (as in divorce, etc.)' = 7103,
  'Account in sequestration (private individual)' = 7104,
  'Account in liquidation (company)' = 7105,
  'Account closed (with no forwarding details)' = 7106,
  'Account transferred (to another banking group)  ' = 7107,
  'Account holder deceased' = 7108,
  'Account effects not cleared' = 7109,
  'No such account' = 7110,
  'Not FICA compliant' = 7111,
  'Recall/withdrawal' = 7112,
  'No authority to debit' = 7113,
  'Debit in contravention of payers authority' = 7114,
  'Authorisation cancelled' = 7115,
  'Previously stopped via stop payment advice' = 7116,
  'Account transferred (within banking group)' = 7117,
  'Account Dormant' = 7118,
  'Presented on AEDO payment stream' = 7119,
  'Bank account number changed' = 7121,
  'Amount changed' = 7122,
  'Deduction currently flagged as premium holiday' = 7123,
  'Deduction reinstated from premium holiday' = 7124,
  'Deleted deduction reinstated due to premium holiday' = 7125,
  'Could not apply premium holiday transaction' = 7126,
  'Premium holiday accepted' = 7127,
  'Premium holiday reversed' = 7128,
  'Premium holiday past action date' = 7129,
  'Premium holiday does not exist' = 7130,
  'Premium holiday already exists' = 7131,
  'Unknown error occured' = 7132,
  'Homing branch will close soon' = 7135,
  'Homing branch is now closed' = 7136,
  'Transaction amount exceeds limit' = 7140,
  'Transaction amount invalid' = 7141,
  'Branch account combination invalid' = 7142,
  'Account stopped' = 7154,
  'Debit order cancelled by Q LINK. Account detail not changed' = 7156,
  'Homing acc. no fails CDV verification' = 7158,
  'Transaction in tracking' = 7161,
  'Payer request to stop presentations' = 7162,
  'Unsuccessful recall' = 7163,
  'Transaction failed in validation' = 7164,
  'No submission - Previously disputed transaction' = 7166,
  'Branch does not currently support Naedo' = 7167,
  'Validation: Branch Code' = 7168,
  'Branch does not support Account Holder Verification' = 7169,
  'Validation: Account Number' = 7170,
  'Refer to Client' = 7171,
  'Refer to Bank' = 7172,
  'Card Declined' = 7173,
  'Invalid Card Transaction' = 7174,
  'Bank not supported' = 7175,
  'Lost Card' = 7176,
  'Stolen Card' = 7177,
  'Expired Card' = 7178,
  'Restricted Card' = 7179,
  'Card not Supported' = 7180,
  'Invalid Expiry Date' = 7181,
  'Fraud - Card present enviroment' = 7182,
  'Authorisation cancelled by client' = 7183,
  'Unable to authorize transaction' = 7184,
  'Credit Card Referral Problem' = 7185,
  'Issuer or switch inoperative' = 7186,
  'Credit Card Daily limit exceeded' = 7187,
  'Account Type failed validation' = 7199,
  'Not provided for (deduction deleted)' = 7200,
  'Invalid Account Number' = 7205,
  'Invalid ID Number' = 7206,
  'Invalid name' = 7207,
  'Bank Account does not accept debit' = 7208,
  'Bank Account does not accept credits' = 7209,
  'No response from the participating bank' = 7210,
  'Account Number and ID Number invalid' = 7211,
  'Transaction to be released' = 7213,
  'Transaction already released' = 7214,
  'Error signing hash value' = 7215,
  'Error verifying hash value' = 7216,
  'Aedo Installment suspended' = 7217,
  'Deduction amount exceeds 10% limit after grant review' = 7218,
  'Mandate Disputed' = 7230,
  'Employee does not belong to a medical aid' = 8001,
  'Medical overlap' = 8002,
  'Person already belongs to another medical aid' = 8003,
  'Person already belongs to your medical aid' = 8004,
  'Only one medical transaction allowed' = 8005,
  'Transaction date before inception date' = 8006,
  'Fund switch in progress' = 8007,
  'Savings amount greater than 25% of premium' = 8008,
  'Deletion after notice period deletion date' = 8009,
  'Medical plan/option compulsory' = 8010,
  'Medical plan/option invalid' = 8011,
  'Employer plus employee contribution must equal amount' = 8012,
  'Start date before termination of previous fund' = 8013,
  'Medical arrears cancelled due to arrears for new fund.' = 8014,
  'Normal Medical Input on Arrear File' = 8015,
  'Arrear Input on Normal Medical File' = 8016,
  'Member does not belong to your medical aid' = 8017,
  'Client not participating in fund switch' = 8018,
  'Notified by another fund' = 8019,
  'Duplicate Notification by your fund' = 8020,
  'No Notification to cancel' = 8021,
  'Employee is not a member of the specified fund' = 8022,
  'Reason code invalid' = 8023,
  'Number of medical scheme dependants compulsory' = 8024,
  'ReasonCode compulsory' = 8026,
  'SASSA MED on backdated UPD amount diff > R1500' = 8027,
  'Invalid characters in record' = 9000,
  'Invalid date' = 9002,
  'Invalid field data' = 9003,
  'Not in accordance with the format' = 9004,
  'Duplicate header' = 9005,
  'Record count on trailer incorrect' = 9007,
  'Check total on trailer incorrect' = 9008,
  'Invalid institution code' = 9009,
  'Invalid salarymonth' = 9010,
  'Invalid payroll' = 9011,
  'Invalid department number' = 9012,
  'Transaction too late for payroll run' = 9013,
  'Invalid generation number' = 9014,
  'Unknown payroll error code' = 9015,
  'Invalid creation date' = 9016,
  'Transaction type invalid for file type' = 9017,
  'Combination of errors' = 9018,
  'Recurring total on sub_trailer incorrect: Department' = 9019,
  'Institution not registered for this payroll' = 9020,
  'Unable to process request. Pls call helpdesk 0860 102 390' = 9021,
  'Input already at payroll. Input reversal disabled' = 9022,
  'Repetition of payroll run not allowed' = 9023,
  'Non Confirmed' = 9024,
  'Trailer amount not equal bank statement table amount' = 9025,
  'No destination for E-mail' = 9038,
  'Unable to send E-mail ' = 9039,
  'Field value truncated' = 9040,
  'Salary frozen ' = 9052,
  'Threshold exceeded. See Threshold log' = 9053,
  'Branch file error' = 9054,
  'Error in Initial Branch table Value Verification' = 9055,
  'Did not pass first test did exception' = 9056,
  'Unknown Error Occurred' = 9057,
  'Action date after bank cut off' = 9058,
  'Error opening bank information.' = 9059,
  'Error opening branch information.' = 9060,
  'Error opening branchInfo information.' = 9061,
  'Clip(path()) values.Tps file not found.' = 9062,
  'Make sure of records in ini file and if it exists...' = 9063,
  'Error opening values.Tps' = 9064,
  'No values in values.Tps. Use CDVSetup.Exe.' = 9065,
  'Did not pass first test did exception ' = 9066,
  'Is zero' = 9068,
  'Invalid request' = 9069,
  'Action date invalid' = 9070,
  'Account not locked' = 9071,
  'Transaction account same as contra account' = 9072,
  'Creditor code not on profile' = 9073,
  'Debtor code not on profile' = 9074,
  'DR/CR indicator invalid' = 9075,
  'Sub batch number invalid' = 9076,
  'Negative amount not allowed' = 9077,
  'Hash total did not balance' = 9078,
  'Debits over R 500,000.00 not allowed' = 9079,
  'Bank error during input load' = 9080,
  'Original transaction not found' = 9081,
  'Validation: Missing Details' = 9082,
  'Incoming file data invalid' = 9083,
  'System currently unavailable' = 9084,
  'System maintenance in Progress' = 9085,
  'UFO File' = 9200,
  'Dump File' = 9201,
  'Error processing file' = 9204,
  'Error opening file for sort' = 9205,
  'Wrong record structure' = 9206,
  'Duplicate file or file out of sequence' = 9207,
  'Translation code does not exist' = 9209,
  'Client not registered' = 9210,
  'Not a valid QDC code' = 9211,
  'Status report - Open file error' = 9212,
  'Period is invalid' = 9213,
  'No trailer record' = 9214,
  'Unexpected end of file' = 9215,
  'Error report - Open file error' = 9216,
  'Data file - Open file error' = 9217,
  'Service currently unavailable, please contact Q LINK' = 9218,
  'Unable to create track_ID' = 9219,
  'Unable to log process' = 9220,
  'Error opening file' = 9221,
  'File not found' = 9222,
  'Open file error' = 9223,
  'No records' = 9224,
  'Layout not defined' = 9225,
  'Field values incorrect' = 9226,
  'Values do not match' = 9227,
  'Unable to update file_tracking' = 9228,
  'No E-mail address' = 9230,
  'Unable to send E-mail' = 9231,
  'Transaction re-submitted on a new track ID' = 9232,
  'Mail availability not received' = 9233,
  'Client suspended' = 9234,
  'Payroll not on hosting site' = 9235,
  'Invalid file type' = 9236,
  'Header of wrapped file invalid' = 9237,
  'Trailer of wrapped file invalid' = 9238,
  'Data found after trailer' = 9239,
  'Invalid XML message' = 9240,
  'Invalid Username/Password' = 9241,
  'Password has expired' = 9242,
  'Blank record embedded in file' = 9243,
  'Transaction rejected on request of client' = 9244,
  'Value in database column not defined' = 9245,
  'Institution not linked to Payroll group id' = 9246,
  'Web user validation failed' = 9248,
  'Contact validation failed' = 9249,
  'Recon Active check failed' = 9250,
  'Failed to load web functions' = 9251,
  'Failed to log web function' = 9252,
  'Failed to load Contact Maillist' = 9253,
  'Unknown Web Transaction Id' = 9254,
  'QLINK Rejection - Repocessed' = 9255,
  'Action_Logprocess' = 9501,
  'Action_Logtofile' = 9502,
  'NOT USED' = 9503,
  'Action_Send_Sms' = 9504,
  'Action_Send_Mail' = 9505,
  'Attempted with pointer equal null' = 9506,
  'Failed to allocate memory for value' = 9507,
  'Pointer argument equal null' = 9508,
  'Attempted with database pointer equal null' = 9509,
  'Phantom must be initiated by Oracle' = 9510,
  'Only one instance of Process may run' = 9511,
  'Failed to load shared object' = 9512,
  'ACB Transactions not released at bank' = 9600,
  'AVSR request redirected to alternative channel' = 9601,
  'Recon busy for payroll. File will process later' = 9999
}
