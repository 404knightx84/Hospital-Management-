# Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o| PATIENT : "has profile"
    USER ||--o| DOCTOR : "has profile"
    DEPARTMENT ||--o{ DOCTOR : "employs"

    PATIENT ||--o{ APPOINTMENT : books
    DOCTOR   ||--o{ APPOINTMENT : accepts

    APPOINTMENT ||--o| VISIT : "leads to"
    PATIENT ||--o{ VISIT : has
    DOCTOR  ||--o{ VISIT : conducts

    PATIENT ||--o{ DAILY_CHECKUP : "recorded for"
    USER    ||--o{ DAILY_CHECKUP : records

    VISIT ||--o| PRESCRIPTION : generates
    PATIENT  ||--o{ PRESCRIPTION : receives
    DOCTOR   ||--o{ PRESCRIPTION : issues
    MEDICINE ||--o{ PRESCRIPTION : "included in"

    PRESCRIPTION ||--o{ MEDICINE_UPDATE : "changed via"
    PATIENT  ||--o{ MEDICINE_UPDATE : has
    MEDICINE ||--o{ MEDICINE_UPDATE : "refers to"

    PATIENT ||--o{ CANCER_CASE : diagnosed
    DOCTOR  ||--o{ CANCER_CASE : treats

    PATIENT ||--o{ DIABETES_RECORD : has
    DOCTOR  ||--o{ DIABETES_RECORD : manages

    PATIENT ||--o{ OPERATION : undergoes
    DOCTOR  ||--o{ OPERATION : performs

    OPERATION ||--o{ RECOVERY_LOG : "tracked by"
    PATIENT   ||--o{ RECOVERY_LOG : has

    USER ||--o{ NOTIFICATION : receives

    USER {
        ObjectId id PK
        string name
        string email
        string password
        string role
        string phone
    }
    PATIENT {
        ObjectId id PK
        ObjectId user FK
        date dateOfBirth
        string gender
        string bloodGroup
        string[] chronicConditions
    }
    DOCTOR {
        ObjectId id PK
        ObjectId user FK
        string specialization
        ObjectId department FK
        number consultationFee
    }
    DEPARTMENT {
        ObjectId id PK
        string name
    }
    APPOINTMENT {
        ObjectId id PK
        ObjectId patient FK
        ObjectId doctor FK
        date date
        string timeSlot
        string status
    }
    VISIT {
        ObjectId id PK
        ObjectId patient FK
        ObjectId doctor FK
        ObjectId appointment FK
        date visitDate
        string visitType
        string diagnosis
    }
    DAILY_CHECKUP {
        ObjectId id PK
        ObjectId patient FK
        ObjectId recordedBy FK
        date date
        object vitals
    }
    MEDICINE {
        ObjectId id PK
        string name
        string category
        number stockQuantity
        date expiryDate
    }
    PRESCRIPTION {
        ObjectId id PK
        ObjectId patient FK
        ObjectId doctor FK
        ObjectId visit FK
        date issuedDate
    }
    MEDICINE_UPDATE {
        ObjectId id PK
        ObjectId patient FK
        ObjectId prescription FK
        ObjectId medicine FK
        string changeType
    }
    CANCER_CASE {
        ObjectId id PK
        ObjectId patient FK
        ObjectId oncologist FK
        string cancerType
        string stage
        string status
    }
    DIABETES_RECORD {
        ObjectId id PK
        ObjectId patient FK
        ObjectId doctor FK
        string diabetesType
    }
    OPERATION {
        ObjectId id PK
        ObjectId patient FK
        ObjectId leadSurgeon FK
        string operationName
        string status
    }
    RECOVERY_LOG {
        ObjectId id PK
        ObjectId patient FK
        ObjectId operation FK
        number day
        number painLevel
        string mobilityStatus
    }
    NOTIFICATION {
        ObjectId id PK
        ObjectId user FK
        string title
        string type
        boolean isRead
    }
```

## Notes on relationships

- **User → Patient / Doctor**: one `User` account extends into exactly one role-specific profile (`Patient` or `Doctor`), keeping auth separate from medical/professional data.
- **Appointment → Visit**: an appointment is the *booking*; a visit is what actually happened when the patient showed up. Walk-ins create a `Visit` with no linked `Appointment`.
- **Visit → Prescription**: prescriptions are usually tied to a visit, but can also be issued standalone (e.g. refill without a visit).
- **Prescription → MedicineUpdate**: instead of rewriting a prescription every time a dosage changes, updates are logged as their own timeline against the original prescription.
- **CancerCase / DiabetesRecord / Operation → RecoveryLog**: these are specialized care modules that sit alongside the general `Visit`/`Prescription` flow, each with domain-specific fields (chemo cycles, sugar logs, recovery milestones).
