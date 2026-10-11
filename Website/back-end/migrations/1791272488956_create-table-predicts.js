/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable('predicts', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
    },
    user_id: {
      type: 'INTEGER',
      notNull: true,
    },
    gender: {
      type: 'VARCHAR(20)',
      notNull: true,
      check: "gender IN ('pria', 'wanita')",
    },
    age: {
      type: 'INTEGER',
      notNull: true,
    },
    hypertension: {
      type: 'VARCHAR(20)',
      notNull: true,
      check: "hypertension IN ('ya', 'tidak')",
    },
    heart_disease: {
      type: 'VARCHAR(20)',
      notNull: true,
      check: "heart_disease IN ('ya', 'tidak')",
    },
    smoking_history: {
      type: 'VARCHAR(20)',
      notNull: true,
      check:
        "smoking_history IN ('tidak pernah', 'tidak ada informasi', 'saat ini masih', 'pernah', 'tidak sedang', 'mantan')",
    },
    bmi: {
      type: 'DECIMAL(5,2)',
      notNull: true,
    },
    blood_glucose_level: {
      type: 'INTEGER',
      notNull: true,
    },
    diabetes: {
      type: 'VARCHAR(20)',
      notNull: true,
      check: "heart_disease IN ('ya', 'tidak')",
    },
    created_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('CURRENT_TIMESTAMP'),
    },
  });

  pgm.addConstraint(
    'predicts',
    'fk_predicts_user_id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE'
  );
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('predicts');
};
